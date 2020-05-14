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
        
        expect(response.body).toHaveLength(5);
    });

    // it('manufacturer name should be unique ', async () => {

    //     const data = {name : "Ford"};
    //     const response = await request(app)
    //                         .post('/manufacturer')
    //                         .send(data).expect(400);
    // });

});