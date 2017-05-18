function quickSort(array) {
  var compare = 0;
  var pivot = array.length-1;
  var arrayC = array[compare];
  var arrayP = array[pivot];

  if (array.length < 2) {
    return array;
  }

  while (compare !== pivot) {
    if (compare < pivot) {
      while (arrayC <= arrayP && compare !== pivot) {
        compare++;
        arrayC = array[compare];
      }

      [array[pivot], array[compare], pivot, compare] = [array[compare], array[pivot], compare, pivot];
      arrayP = array[pivot];
      arrayC = array[compare];
    }

    if (compare > pivot) {
      while (arrayC >= arrayP && compare !== pivot) {
        compare--;
        arrayC = array[compare];
      }

      [array[pivot], array[compare], pivot, compare] = [array[compare], array[pivot], compare, pivot];
      arrayP = array[pivot];
      arrayC = array[compare];
    }
  }
  var left = array.splice(0, pivot);
  var right = array.splice(1);
  array.unshift(...quickSort(left));
  array.push(...quickSort(right));
  return array;
}

export default quickSort
