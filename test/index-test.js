"use strict";
const TextLintTester = require("textlint-tester");
const tester = new TextLintTester();
// rule
const rule = require("../src/index");
// ruleName, rule, { valid, invalid }
tester.run("rule", rule, {
    valid: [
        // no problem
        "text"
    ],
    invalid: [
        // single match
        {
            text: "𠀋",
            errors: [
                {
                    message: "「𠀋」はサロゲートペアです。",
                    line: 1,
                    column: 1
                }
            ]
        },
        // multiple match
        {
            text: `𡈽

𡌛
`,
            errors: [
                {
                    message: "「𡈽」はサロゲートペアです。",
                    line: 1,
                    column: 1
                },
                {
                    message: "「𡌛」はサロゲートペアです。",
                    line: 3,
                    column: 1
                }
            ]
        },

    ]
});