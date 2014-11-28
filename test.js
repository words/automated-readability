'use strict';

/**
 * Module dependencies (automatedReadability, assert).
 */

var automatedReadability = require('./'),
    assert = require('assert');

/**
 * Assert, but up to 6 digits.
 */

function roundAssert(a, b) {
    assert(Math.round(a * 1000000) === Math.round(b * 1000000));
}

/**
 * Unit tests.
 */

describe('automatedReadability()', function () {
    it('should be of type `function`', function () {
        assert(typeof automatedReadability === 'function');
    });

    it('should work', function () {
        var result;

        /**
         * Return NaN when an invalid value is given.
         */

        result = automatedReadability();

        assert(result !== result);

        /**
         * The rule of rhythm in prose is not so intricate. Here, too, we
         * write in groups, or phrases, as I prefer to call them, for the
         * prose phrase is greatly longer and is much more nonchalantly
         * uttered than the group in verse; so that not only is there a
         * greater interval of continuous sound between the pauses, but, for
         * that very reason, word is linked more readily to word by a more
         * summary enunciation. Still, the phrase is the strict analogue of
         * the group, and successive phrases, like successive groups, must
         * differ openly in length and rhythm. The rule of scansion in verse
         * is to suggest no measure but the one in hand; in prose, to suggest
         * no measure at all. Prose must be rhythmical, and it may be as
         * much so as you will; but it must not be metrical. It may be
         * anything, but it must not be verse.
         *
         * Sentences: 6
         * Words: 151
         * Characters: 623
         */

        roundAssert(automatedReadability({
            'sentence' : 6,
            'word' : 151,
            'character' : 623
        }), 10.585982);
    });
});
