function quickSort(array) {
  var compare = 0;
  var pivot = array.length-1;

  if (array.length < 2) {
    return array;
  }

  while (compare !== pivot) {

    if (compare < pivot) {
      while (array[compare] <= array[pivot]) {
        compare++;
        if (compare === pivot) {
          break
        }
      }
      [array[pivot], array[compare], pivot, compare] = [array[compare], array[pivot], compare, pivot];
      }

    if (compare > pivot) {
      while (array[compare] >= array[pivot]) {
        compare--;
        if (compare === pivot) {
          break
        }
      }
      [array[pivot], array[compare], pivot, compare] = [array[compare], array[pivot], compare, pivot];
    }
  }

  var left = array.splice(0, pivot)
   var right = array.splice(1)
   array.unshift(...quickSort(left));
   array.push(...quickSort(right));
   return array;
  return array;
}

export default quickSort
