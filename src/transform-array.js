module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error;

    let resultArray = [];
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next':
                i++;
                break;
            case '--discard-prev':
                resultArray.pop();
                break;
            case '--double-next':
                if (i + 1 !== arr.length)
                    resultArray.push(arr[i + 1]);
                break;
            case '--double-prev':
                if (i - 1 >= 0)
                    resultArray.push(arr[i - 1]);
                break;
            default:
                resultArray.push(arr[i]);
        }
    }
    return resultArray;
};
