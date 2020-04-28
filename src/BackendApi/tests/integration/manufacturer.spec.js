const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Manufacturer', () => {

    beforeEach(async () => {

        await connection.migrate.rollback();
        await connection.migrate.latest();
        await connection.seed.run();
    });

    afterAll( async () => {
        await connection.destroy();
    });


    it('should be able to list all manufacturer', async () => {
        const response = await request(app)
                                .get('/manufacturer')
                                .send();
        console.log(response.body);
        expect(response.body).toHaveLength(5);
    });

});