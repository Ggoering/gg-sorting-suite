import mergeSort from '../scripts/mergesort.js';
import genRandNum from '../scripts/genRandNum.js';
import {expect} from 'chai'

describe('Mergesort sorting algorithm', () => {

it('should be a function', () => {
  expect(mergeSort).be.function ;
})

it('should sort a number array', () => {
var array = [ 6, 2, 7, 1, 0, 4];
var sorted = mergeSort(array);

expect(sorted).to.deep.equal([0, 1, 2, 4, 6, 7])
});

it('should sort a large size number array', () => {
var randomNums = genRandNum(141000);
var randomArray = Array.from(randomNums);
var mergeSorted = mergeSort(randomArray)

randomArray = [...randomNums].sort((a, b) => a - b);
expect(mergeSorted[0]).to.deep.equal(randomArray[0]);
expect(mergeSorted[2500]).to.deep.equal(randomArray[2500]);
expect(mergeSorted[randomArray.length-1]).to.deep.equal(randomArray[randomArray.length-1]);
})

it('should sort an alphanumeric string', () => {
var theString = 'alphabet'
theString = theString.split('');
var sorted = Array.from(mergeSort(theString));

expect(sorted).to.deep.equal(['a', 'a', 'b', 'e', 'h', 'l', 'p', 't' ]);
})

it('should sort strings from low to high', () => {
  var array = ['q', 'abc', 'a', 'defg']
  var answer = mergeSort(array)
  expect(answer).to.deep.equal(['a', 'abc', 'defg', 'q'])
})

})
