import quickSort from '../scripts/quicksort.js';
import genRandNum from '../scripts/genRandNum.js';
import {expect} from 'chai'

describe('quicksort sorting algorithm', () => {

it('should be a function', () => {
  expect(quickSort).be.function ;
})

it('should sort a number array', () => {
var array = [ 6, 2, 7, 1, 0, 4];
var sorted = quickSort(array);

expect(sorted).to.deep.equal([0, 1, 2, 4, 6, 7])
});

it('should sort slightly slower than mergesort on the same size array', () => {
var randomNums = genRandNum(141000);
var randomArray = Array.from(randomNums);
var quickSorted = quickSort(randomArray)

randomArray = [...randomNums].sort((a, b) => a - b);
expect(quickSorted[0]).to.deep.equal(randomArray[0]);
expect(quickSorted[2500]).to.deep.equal(randomArray[2500]);
expect(quickSorted[randomArray.length-1]).to.deep.equal(randomArray[randomArray.length-1]);
});



it('should sort an alphanumeric string', () => {
var theString = 'alphabet'
theString = theString.split('');
var sorted = Array.from(quickSort(theString));

expect(sorted).to.deep.equal(['a', 'a', 'b', 'e', 'h', 'l', 'p', 't' ]);
})

it('should sort strings from low to high', () => {
  var array = ['q', 'abc', 'a', 'defg']
  var answer = quickSort(array)
  expect(answer).to.deep.equal(['a', 'abc', 'defg', 'q'])
})

})
describe('quicksort sorting algorithm', () => {

it('should sort a larger array than mergesort can', () => {
var randomNums1 = genRandNum(200000);
var randomArray1 = Array.from(randomNums1);
var quickSorted1 = quickSort(randomArray1)

randomArray1 = [...randomNums1].sort((a, b) => a - b);
expect(quickSorted1[0]).to.deep.equal(randomArray1[0]);
expect(quickSorted1[2500]).to.deep.equal(randomArray1[2500]);
expect(quickSorted1[randomArray1.length-1]).to.deep.equal(randomArray1[randomArray1.length-1]);
});

});
