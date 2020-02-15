module.exports = function countCats(matrix) {
  return matrix.reduce((prev, curArr) => {
    if (curArr.length === 0) return prev;
    return prev + curArr.filter(val => val === '^^').length;
  },
    0);
};