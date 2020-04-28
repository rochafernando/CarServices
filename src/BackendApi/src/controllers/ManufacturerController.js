const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        
        const manufactures = await connection('Manufactures').select('*');

        return response.json(manufactures);
        

    },

    async create(request, response) {
        const { name } = request.body;
        const id = await connection('Manufactures').insert({name});
        response.json({ id });
    }

}