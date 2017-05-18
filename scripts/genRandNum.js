function genRandNum(arrayLength) {
  let returnArray = [];

  for (let i = 0; i < arrayLength; i++) {
    let rand = Math.floor(Math.random() * 100000);

    rand % 2 ? rand = -Math.abs(rand) : rand = Math.abs(rand);
    returnArray.push(rand);
  }

  return returnArray;
}

export default genRandNum
