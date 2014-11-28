'use strict';

/**
 * The constants as defined by the Automated Readability Index.
 */

var CHARACTER_WEIGHT,
    SENTENCE_WEIGHT,
    BASE;

CHARACTER_WEIGHT = 4.71;
SENTENCE_WEIGHT = 0.5;
BASE = 21.43;

/**
 * Get the grade level of a given value according to the Automated Readability
 * Index. More information is available at WikiPedia:
 *
 *   http://en.wikipedia.org/wiki/Automated_Readability_Index
 *
 * @param {Object} counts
 * @param {number} counts.word - Number of words.
 * @param {number} counts.sentence - Number of sentences.
 * @param {number} counts.character - Number of characters (letters,
 *   numbers, punctuation marks).
 * @return {number}
 */

function automatedReadability(counts) {
    if (!counts || !counts.sentence || !counts.word || !counts.character) {
        return NaN;
    }

    return CHARACTER_WEIGHT * (counts.character / counts.word) +
        SENTENCE_WEIGHT * (counts.word / counts.sentence) -
        BASE;
}

/**
 * Export `automatedReadability`.
 */

module.exports = automatedReadability;
