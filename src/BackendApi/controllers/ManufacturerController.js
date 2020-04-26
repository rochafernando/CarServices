const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        
        const manufactures = await connection('Manufactures').select('*');

        return response.json(manufactures);
        

    }

}