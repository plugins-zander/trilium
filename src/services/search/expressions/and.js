"use strict";

const Expression = require('./expression');

class AndExp extends Expression {
    static of(subExpressions) {
        subExpressions = subExpressions.filter(exp => !!exp);

        if (subExpressions.length === 1) {
            return subExpressions[0];
        } else if (subExpressions.length > 0) {
            return new AndExp(subExpressions);
        }
    }

    constructor(subExpressions) {
        super();
        this.subExpressions = subExpressions;
    }

    execute(noteSet, searchContext) {
        for (const subExpression of this.subExpressions) {
            noteSet = subExpression.execute(noteSet, searchContext);
        }

        return noteSet;
    }
}

module.exports = AndExp;
