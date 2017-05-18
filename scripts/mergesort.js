function mergeSort(array) {

  if (array.length < 2) {
    return array
  }
  let leftArray = array.splice(0, Math.floor(array.length/2));
  let rightArray = array.splice(0);
  var left = mergeSort(leftArray);
  var right = mergeSort(rightArray);
return merge(left, right)
}



function merge(left, right){
  var sorted = []
  while(left.length > 0 || right.length > 0){
  if(left.length === 0) {
    sorted.push(...right.splice(0))
  }

  if(right.length === 0) {
    sorted.push(...left.splice(0))
  }

  if(left[0] <= right[0]) {
    sorted.push(left.shift())
  }
  if (left[0] >= right[0]) {
    sorted.push(right.shift())
  }
}
return sorted
}

export default mergeSort
