"use strict";
module.exports = function(context, options = {}) {
    const {Syntax, RuleError, report, getSource} = context;
    
    let regex = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g; // サロゲートペアの正規表現

    return {
        [Syntax.Str](node){ // "Str" node
            const text = getSource(node); // Get text

            let kanjis = text.match(regex);

            if (!kanjis) {
              return;
            }

            kanjis.forEach(function(kanji, i){
                const indexOfKanji = text.indexOf(kanjis[i]);

                const ruleError = new RuleError('「' + kanjis[i] + "」はサロゲートペアです。", {
                  index: indexOfKanji
                  });
                report(node, ruleError);
            });
        }
    }
};
