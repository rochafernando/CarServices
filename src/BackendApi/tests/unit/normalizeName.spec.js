const normalizeName = require('../../src/utils/normalizeName');


describe('Normalize Names to Database', () => {
    it('should clean an manufacture name like Name',() => {
        const correct = "Ford";
        const incorrect = normalizeName("ford");

        expect(incorrect).toBe(correct);
    });
});