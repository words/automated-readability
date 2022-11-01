/**
 * @typedef Counts
 *   Counts from input document.
 * @property {number} sentence
 *   Number of sentences.
 * @property {number} word
 *   Number of words.
 * @property {number} character
 *   Number of characters.
 */

/**
 * @typedef {Counts} AutomatedReadabilityCounts
 *   Deprecated: please use the `Counts` type instead.
 */

const characterWeight = 4.71
const sentenceWeight = 0.5
const base = 21.43

/**
 * Given an object containing the number of words (`word`), the number of
 * sentences (`sentence`), and the number of characters  (`character`) in a
 * document, returns the grade level associated with the document.
 *
 * @param {Counts} counts
 *   Counts from input document.
 * @return {number}
 *   Grade level associated with the document.
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
