# automated-readability

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Formula to detect the ease of reading a text according to the [automated
readability index][formula].

## Install

[npm][]:

```sh
npm install automated-readability
```

## Use

```js
var automatedReadability = require('automated-readability')

// For:
//
// The rule of rhythm in prose is not so intricate. Here,
// too, we write in groups, or phrases, as I prefer to call
// them, for the prose phrase is greatly longer and is much
// more nonchalantly uttered than the group in verse; so
// that not only is there a greater interval of continuous
// sound between the pauses, but, for that very reason,
// word is linked more readily to word by a more summary
// enunciation. Still, the phrase is the strict analogue
// of the group, and successive phrases, like successive
// groups, must differ openly in length and rhythm. The
// rule of scansion in verse is to suggest no measure but
// the one in hand; in prose, to suggest no measure at all.
// Prose must be rhythmical, and it may be as much so as
// you will; but it must not be metrical. It may be
// anything, but it must not be verse.
//
// Containing 6 sentences, 151 words, and 623 characters.
automatedReadability({
  sentence: 6,
  word: 151,
  character: 623
})
// => 10.585982...
```

## API

### `automatedReadability(counts)`

Given an object containing the number of words (`word`), the number of sentences
(`sentence`), and the number of characters  (`character`) in a document, returns
the grade level associated with the document.

## Related

*   [`coleman-liau`](https://github.com/words/coleman-liau)
    — Uses letter count instead of an error-prone syllable parser
*   [`dale-chall-formula`](https://github.com/words/dale-chall-formula)
    — Uses a dictionary, suited for higher reading levels
*   [`flesch`](https://github.com/words/flesch)
    — Uses syllable count
*   [`flesch-kincaid`](https://github.com/words/flesch-kincaid)
    — Like `flesch-formula`, returns U.S. grade levels
*   [`gunning-fog`](https://github.com/words/gunning-fog)
    — Uses syllable count, hard to implement (needs POS-tagging and NER)
*   [`smog-formula`](https://github.com/words/smog-formula)
    — Like `gunning-fog-index`, without the need for advanced NLP tasks
*   [`spache-formula`](https://github.com/words/spache-formula)
    — Uses a dictionary, suited for lower reading levels

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/words/automated-readability.svg

[build]: https://travis-ci.org/words/automated-readability

[coverage-badge]: https://img.shields.io/codecov/c/github/words/automated-readability.svg

[coverage]: https://codecov.io/github/words/automated-readability

[downloads-badge]: https://img.shields.io/npm/dm/automated-readability.svg

[downloads]: https://www.npmjs.com/package/automated-readability

[size-badge]: https://img.shields.io/bundlephobia/minzip/automated-readability.svg

[size]: https://bundlephobia.com/result?p=automated-readability

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[formula]: https://en.wikipedia.org/wiki/Automated_Readability_Index
