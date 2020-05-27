const connection = require('../database/connection');

module.exports = {

    async getAll(request, response) {
        
        const manufactures = await connection('Manufactures').select('*');

        return response.json(manufactures);
        

    },

    async create(request, response) {
        const { name } = request.body;
        try {
            const id = await connection('Manufactures').insert({name});
            response.json({ id });
            
        } catch (error) {
            if(error.errno === 19){
                response.status(400).send({ error : [`O fabricante "${name}" já existe em nossos registros.`]});
            }
        }
    },

    async update(request, response) {

        const { id } = request.params;
        const { name } = request.body;
        
        // TODO Continuar desse ponto, criar a verificação do registro pelo id, se o fabricante já existes informar o erro, pensar em criar um service nesse caso

        try {
            
            const manufacturer =  await connection('Manufactures').select('*').where('id',id);            
          
            if(manufacturer.length === 0)
                throw new Error('Fabricante inválido');

            manufacturer.name = name;
            
            await connection('Manufactures').where('id',id).update('name', name);

            response.json({ message : 'Atualizado com sucesso'});
            
        } catch (error) {
            console.log(error);

            if(error.number === 2601){
                response.status(400).send({ error : [`O fabricante "${name}" já existe em nossos registros.`]});
            }            
            console.log(error);
                response.status(400).send({ error : [`O fabricante "${id}" não existe em nossos registros.`]}  );            
        }

    },

    async delete(request, response) {
        const { id } = request.params;


        try {
            const totalDepentes = 0 //await connection('')


            const manufacturer =  await connection('Manufactures').where('id',id);            
          
            if(manufacturer.length === 0)
                response.json({ message : 'Não encontrado '});

            

            

            if(totalDepentes === 0 )
            {
                await connection('Manufactures').where('id',id).delete();
                response.json({ message : ` '${ manufacturer[0].name}' excluido com sucesso`});
            } else {
                response.json({ message : ` '${manufacturer[0].name}' Não pode ser excluido pois existem informações relacionadas a ele`});
            }            

        } catch (error) {
            
        }
        

    }

}
