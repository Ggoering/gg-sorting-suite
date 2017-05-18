function insertionSort(array) {
  let sortedArray = 1

  while(sortedArray < array.length) {
    let pointer = sortedArray
    let compare = sortedArray-1

    while (array[pointer] < array[compare] && compare !== -1) {
      [array[compare], array[pointer]] = [array[pointer], array[compare]];
      pointer--;
      compare = pointer - 1
    }
    sortedArray++
  }
  return array
}

export default insertionSort
