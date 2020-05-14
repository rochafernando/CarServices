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

    update(request, response) {
        const { id } = request.params;
        const { name } = request.body;

        response.json({ id, name});

    }

}