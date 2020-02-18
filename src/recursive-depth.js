module.exports = class DepthCalculator {
    calculateDepth(arr) {
        // if arr is Array -> do something
        if (Array.isArray(arr)) {
            // remove everything except Arrays
            arr = arr.filter(val => Array.isArray(val));

            let maxDepth = 0;
            for (let i = 0; i < arr.length; i++)
                // iterative recursively call calculateDepth()
                // onto each inner element (arr[i]) into the given array (arr)
                // and calculate depths -> then get the Max from 2 of them
                maxDepth = Math.max(maxDepth, this.calculateDepth(arr[i]));

            // when cycle is done -> return maxDepth + 1
            return 1 + maxDepth;
        }
        // else -> return 0 depth
        return 0;
    }
};