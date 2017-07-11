'use strict';

module.exports = automatedReadability;

var CHARACTER_WEIGHT = 4.71;
var SENTENCE_WEIGHT = 0.5;
var BASE = 21.43;

function automatedReadability(counts) {
  if (!counts || !counts.sentence || !counts.word || !counts.character) {
    return NaN;
  }

  return (CHARACTER_WEIGHT * (counts.character / counts.word)) +
    (SENTENCE_WEIGHT * (counts.word / counts.sentence)) -
    BASE;
}
