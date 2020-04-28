const normalizeName = require('../../src/utils/normalizeName');


describe('Normalize Names to Database', () => {
    it('should clean an manufacture name like Name',() => {
        const correct = "Leonardo Guedes";
        const incorrect = normalizeName("lEoNaRdo gUedEs");

        expect(incorrect).toBe(correct);
    });
});