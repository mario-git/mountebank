'use strict';

const assert = require('assert'),
    errors = require('../../src/util/errors'),
    inherit = require('../../src/util/inherit');

describe('errors', () => {
    describe('#details', () => {
        it('should include Error prototype properties', () => {
            const error = inherit.from(Error, { code: 'code' }),
                keys = Object.keys(errors.details(error));

            assert.deepEqual(keys, ['code', 'name', 'stack']);
        });

        it('should return own properties for non Error objects', () => {
            const keys = Object.keys(errors.details({ first: 1, second: 2 }));

            assert.deepEqual(keys, ['first', 'second']);
        });
    });
});
