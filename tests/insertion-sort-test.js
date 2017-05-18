import insertionSort from '../scripts/insertionsort.js';
import genRandNum from '../scripts/genRandNum.js';
import {expect} from 'chai'

describe('Insertionsort sorting algorithm', () => {

it('should be a function', () => {
  expect(insertionSort).be.function ;
})

it('should sort a number array', () => {
var array = [ 6, 2, 7, 1, 0, 4];
var sorted = insertionSort(array);

expect(sorted).to.deep.equal([0, 1, 2, 4, 6, 7])
});

it('should sort a mid size number array', () => {
var randomNums = genRandNum(11000);
var randomArray = Array.from(randomNums);
var insertionSorted = insertionSort(randomArray)

randomArray = [...randomNums].sort((a, b) => a - b);
expect(insertionSorted[0]).to.deep.equal(randomArray[0]);
expect(insertionSorted[2500]).to.deep.equal(randomArray[2500]);
expect(insertionSorted[randomArray.length-1]).to.deep.equal(randomArray[randomArray.length-1]);
})

it('should sort an alphanumeric string', () => {
var theString = 'alphabet'
theString = theString.split('');
var sorted = Array.from(insertionSort(theString));

expect(sorted).to.deep.equal(['a', 'a', 'b', 'e', 'h', 'l', 'p', 't' ]);
})

it('should sort strings from low to high', () => {
  var array = ['q', 'abc', 'a', 'defg']
  var answer = insertionSort(array)
  expect(answer).to.deep.equal(['a', 'abc', 'defg', 'q'])
})

})
