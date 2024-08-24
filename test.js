const { describe } = require('mocha');
const { abs } = require('./index');
const { expect } = require('chai');

describe('suite', () => {
    it('test', () => {
        expect(abs(-3)).to.equal(3);
    });
});
