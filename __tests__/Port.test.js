/* globals describe it expect */
const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js');

describe('Port', () => {
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    it('port has a name', () => {
        const port = new Port('Manchester');
        expect(port.portName).toBe('Manchester');
    });
});