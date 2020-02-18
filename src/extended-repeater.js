module.exports = function repeater(str, options) {
    // if options are absent -> create them
    if (!options) options = {};

    // if str is not a string -> make it string
    if (typeof str !== 'string') str = String(str);

    // if addition presents in options
    // & addition is not a string -> make it string
    if (options.hasOwnProperty('addition') &&
        typeof options.addition !== 'string')
        options.addition = String(options.addition);

    // give default values if any of properties are absent
    if (!options.repeatTimes) options.repeatTimes = 1;
    if (!options.separator) options.separator = '+';
    if (!options.addition) options.addition = '';
    if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
    if (!options.additionSeparator) options.additionSeparator = '|';

    let result = '';
    for (let i = 0; i < options.repeatTimes; i++) {
        result += str; // add str string
        for (let j = 0; j < options.additionRepeatTimes; j++) {
            result += options.addition; // add addition string
            if (j + 1 !== options.additionRepeatTimes) // check if not an end
                result += options.additionSeparator; // add addition separator
        }
        if (i + 1 !== options.repeatTimes) // check if not an end
            result += options.separator; // add separator
    }
    return result;
};