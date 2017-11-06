# automated-readability [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

Formula to detect the ease of reading a text according to the
[Automated Readability Index][formula].

## Installation

[npm][]:

```bash
npm install automated-readability
```

## Usage

```js
var automatedReadability = require('automated-readability');

/**
 * For:
 *
 * The rule of rhythm in prose is not so intricate. Here,
 * too, we write in groups, or phrases, as I prefer to call
 * them, for the prose phrase is greatly longer and is much
 * more nonchalantly uttered than the group in verse; so
 * that not only is there a greater interval of continuous
 * sound between the pauses, but, for that very reason,
 * word is linked more readily to word by a more summary
 * enunciation. Still, the phrase is the strict analogue
 * of the group, and successive phrases, like successive
 * groups, must differ openly in length and rhythm. The
 * rule of scansion in verse is to suggest no measure but
 * the one in hand; in prose, to suggest no measure at all.
 * Prose must be rhythmical, and it may be as much so as
 * you will; but it must not be metrical. It may be
 * anything, but it must not be verse.
 *
 * Containing 6 sentences, 151 words, and 623 characters.
 */

automatedReadability({
  sentence: 6,
  word: 151,
  character: 623
});
//=> 10.585982...
```

## API

### `automatedReadability(counts)`

Given an object containing the number of words (`word`), the number of
sentences (`sentence`), and the number of characters  (`character`) in
a document, returns the grade level associated with the document.

## Related

*   [`coleman-liau`](https://github.com/wooorm/coleman-liau)
    — Uses letter count instead of an error-prone syllable parser
*   [`dale-chall-formula`](https://github.com/wooorm/dale-chall-formula)
    — Uses a dictionary, suited for higher reading levels
*   [`flesch`](https://github.com/wooorm/flesch)
    — Uses syllable count
*   [`flesch-kincaid`](https://github.com/wooorm/flesch-kincaid)
    — Like `flesch-formula`, returns U.S. grade levels
*   [`gunning-fog`](https://github.com/wooorm/gunning-fog)
    — Uses syllable count, hard to implement (needs POS-tagging and NER)
*   [`smog-formula`](https://github.com/wooorm/smog-formula)
    — Like `gunning-fog-index`, without the need for advanced NLP tasks
*   [`spache-formula`](https://github.com/wooorm/spache-formula)
    — Uses a dictionary, suited for lower reading levels

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/words/automated-readability.svg

[travis]: https://travis-ci.org/words/automated-readability

[codecov-badge]: https://img.shields.io/codecov/c/github/words/automated-readability.svg

[codecov]: https://codecov.io/github/words/automated-readability

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[formula]: http://en.wikipedia.org/wiki/Automated_Readability_Index
