const connection = require('../database/connection');

module.exports  =   {
    async index(request, response) {
        
        const states = await connection('States').select('*');

        return response.json(states);
        

    },
}