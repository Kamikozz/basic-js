module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (Array.isArray(arr)) {
            // remove everything except Arrays
            arr = arr.filter(val => Array.isArray(val));
            
            let maxDepth = 0;
            for (let i = 0 ; i < arr.length; i++)
                maxDepth = Math.max(maxDepth, this.calculateDepth(arr[i]));

            return 1 + maxDepth;
        }
        return 0;
    }
};