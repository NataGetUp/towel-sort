
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == null) {
    return []
  } else {
    newArr = matrix.map(function(item, index, array) {
      if (index % 2 !== 0) {
        return item.reverse();
      } else {
        return item;
      }
    });
  
    let result = newArr.flat();
    return result;
  }
}
