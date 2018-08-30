'use strict';

var test = require('tape');
var nan = require('is-nan');
var automatedReadability = require('.');

/* Tests. */
test('automatedReadability', function (t) {
  t.ok(nan(automatedReadability()), 'NaN when an invalid value is given');

  /* The rule of rhythm in prose is not so intricate. Here, too, we
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
   * Sentences: 6, words: 151, characters: 623. */

  t.equal(
    round(automatedReadability({
      sentence: 6,
      word: 151,
      character: 623
    })),
    round(10.585982),
    'should work'
  );

  t.end();
});

function round(val) {
  return Math.round(val * 1e6) / 1e6;
}
