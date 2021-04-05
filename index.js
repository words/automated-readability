'use strict'

module.exports = automatedReadability

var characterWeight = 4.71
var sentenceWeight = 0.5
var base = 21.43

function automatedReadability(counts) {
  if (!counts || !counts.sentence || !counts.word || !counts.character) {
    return Number.NaN
  }

  return (
    characterWeight * (counts.character / counts.word) +
    sentenceWeight * (counts.word / counts.sentence) -
    base
  )
}
