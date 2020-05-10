const connection = require('../database/connection');

module.exports  =   {

    async index(request, response) {
        
        const cities = await connection('Cities').select('*');

        return response.json(cities);
        

    },
    async create(request, response) {
        const { name,Code,StatesId} = request.body;
        const id = await connection('Cities').insert({name,Code,StatesId});
        response.json({ id });
    },

    async update(request, response){
        const {name,Code,StatesId}= request.body;
        const {id} = request.params;
        const teste = await connection('Cities').update({name,Code,StatesId}).where({id});
        response.json({teste});
    },

    async delete(request, response) {
        const {id} = request.params;
        const teste = await connection('Cities').where({id}).delete();
        response.json({teste});
    },
}