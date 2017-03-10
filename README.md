# textlint-rule-no-surrogate-pair

Detects surrogate pairs (D800-DBFF and DC00-DFFF)　in sentences.

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-no-surrogate-pair

## Usage

Via `.textlintrc`(Recommended)

```json
{
    "rules": {
        "surrogate-pair": true
    }
}
```

Via CLI

```
textlint --rule no-surrogate-pair README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester "textlint-tester").

    npm test

## License

MIT © 