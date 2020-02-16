module.exports = function repeater(str, options) {
    // if str & addition is not strings -> make them strings
    if (typeof str !== 'string' || (options && options.addition && typeof options.addition !== 'string')) {
        str = String(str);
        options.addition = String(options.addition);
    }

    if (!options) options = {};

    // give default values if any of properties is absent
    if (!options.hasOwnProperty('repeatTimes') || !options.repeatTimes)
        options.repeatTimes = 1;
    if (!options.hasOwnProperty('separator') | !options.separator)
        options.separator = '+';
    if (!options.hasOwnProperty('addition') || !options.addition)
        options.addition = '';
    if (!options.hasOwnProperty('additionRepeatTimes') || !options.additionRepeatTimes)
        options.additionRepeatTimes = 1;
    if (!options.hasOwnProperty('additionSeparator') || !options.additionSeparator)
        options.additionSeparator = '|';

    let result = '';
    for (let i = 0; i < options.repeatTimes; i++) {
        result += str;
        for (let j = 0; j < options.additionRepeatTimes; j++) {
            result += options.addition;
            if (j + 1 !== options.additionRepeatTimes)
                result += options.additionSeparator;
        }
        if (i + 1 !== options.repeatTimes)
            result += options.separator;
    }
    return result;
};