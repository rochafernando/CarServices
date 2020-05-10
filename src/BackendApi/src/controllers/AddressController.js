const connection = require('../database/connection');

module.exports  =   {

    async index(request, response) {
        
        const address = await connection('Address').select('*');

        return response.json(address);
    },

    async create(request, response) {
        const { name,CEP,TypesId,CitiesId} = request.body;
        const address = await connection('Address').insert({name,CEP,TypesId,CitiesId});
        response.json({ address });
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