var characterWeight = 4.71
var sentenceWeight = 0.5
var base = 21.43

/**
 * @typedef {Object.<string, number>} AutomatedReadabilityCounts
 * @property {number} sentence
 * @property {number} word
 * @property {number} character
 */

/**
 * Given an object containing the number of words (`word`), the number of sentences (`sentence`), and the number of characters  (`character`) in a document, returns the grade level associated with the document.
 *
 * @param {AutomatedReadabilityCounts} counts
 * @return {number}
 */
export function automatedReadability(counts) {
  if (!counts || !counts.sentence || !counts.word || !counts.character) {
    return Number.NaN
  }

  return (
    characterWeight * (counts.character / counts.word) +
    sentenceWeight * (counts.word / counts.sentence) -
    base
  )
}
