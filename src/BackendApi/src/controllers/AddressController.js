const connection = require('../database/connection');
const minhaPromise = require('../service/ConsultarCEP');
module.exports  =   {

    async index(request, response) {   
        const address = await connection('Address').select('*');
        minhaPromise().then(function(response){
            console.log(response);
        })
        return response.json(address);
    },
  async create(request, response) {
        const { name,CEP,TypesId,CitiesId} = request.body;
        // Trazer todas a informações do ConsultarCEP para aqui
        //const address = await connection('Address').insert({name,CEP,TypesId,CitiesId});
        response.json({ CEP });
    },
    async update(request , response){
        const {name,CEP,TypesId,CitiesId}= request.body;
        const {id} = request.params;
        const address = await connection('Address').update({name,CEP,TypesId,CitiesId}).where({id});
        response.json({address});
    },

    async delete(request, response) {
        const {id} = request.params;
        const address = await connection('Address').where({id}).delete();
        response.json({address});
    },
}