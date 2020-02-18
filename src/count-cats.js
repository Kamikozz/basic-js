module.exports = function countCats(matrix) {
  return matrix.reduce((prev, curArr) =>
    (curArr.length === 0) ?
      prev : prev + curArr.filter(val => val === '^^').length
    , 0);
};