import bubbleSort from '../scripts/bubblesort.js';
import genRandNum from '../scripts/genRandNum.js';
import {expect} from 'chai'

describe('Bubblesort sorting algorithm', () => {

it('should be a function', () => {
  expect(bubbleSort).be.function ;
})

it('should sort a number array', () => {
var array = [ 6, 2, 7, 1, 0, 4];
var sorted = bubbleSort(array);

expect(sorted).to.deep.equal([0, 1, 2, 4, 6, 7])
});

it('should sort a mid size number array', () => {
var randomNums = genRandNum(7900);
var randomArray = Array.from(randomNums);
var bubbleSorted = bubbleSort(randomArray)

randomArray = [...randomNums].sort((a, b) => a - b);
expect(bubbleSorted[0]).to.deep.equal(randomArray[0]);
expect(bubbleSorted[2500]).to.deep.equal(randomArray[2500]);
expect(bubbleSorted[randomArray.length-1]).to.deep.equal(randomArray[randomArray.length-1]);
})

it('should sort an alphanumeric string', () => {
var theString = 'alphabet'
theString = theString.split('');
var sorted = Array.from(bubbleSort(theString));

expect(sorted).to.deep.equal(['a', 'a', 'b', 'e', 'h', 'l', 'p', 't' ]);
})

it('should sort strings from low to high', () => {
  var array = ['q', 'abc', 'a', 'defg']
  var answer = bubbleSort(array)
  expect(answer).to.deep.equal(['a', 'abc', 'defg', 'q'])
})

})
