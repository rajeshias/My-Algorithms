// Create 100 random numbers in range 0 to 1000.
// Sort the random numbers from least to greatest
// Find the distance between each of the adjacent numbers
// What is the most common distance?

// Example:
// Random Numbers: 1, 4, 11, 12, 13, 16, 30, 31 ...
// Disatnce:        3,  7,  1,  1,  3, 14,  14
// Most common distance: 1
//////////////////////////////////////////////////////////////
const mostCommonDistance = (randomRange, lengthOfList) => {
  /*
    *@params {Int} randomRange [The range of values in (1, randomRange) including 
                   endpoints  that can be randomly selected]
    *@params {Int} lengthOfList [Total length of the list of random numbers 
                   of range]
    *@returns {Int} The most common distance between the difference of 
                    each adjacent elements in the list of random numbers
  */
  let randomNumbers = Array(lengthOfList)
    .fill(0)
    .map((_, i) => Math.floor(Math.random() * randomRange) + 1);
  randomNumbers.sort(function (a, b) {
    return a - b;
  });

  let distances = randomNumbers.map((val, index) => {
    if (index === 0) {
      return 0;
    }
    return val - randomNumbers[index - 1];
  });
  distances.shift();
  let hashMap = {};
  let maxEl = distances[0],
    maxCount = 1;
  for (var i = 0; i < distances.length; i++) {
    var el = distances[i];
    if (hashMap[el] == null) hashMap[el] = 1;
    else hashMap[el]++;
    if (hashMap[el] > maxCount) {
      maxEl = el;
      maxCount = hashMap[el];
    }
  }
  return maxEl;
};

result = mostCommonDistance(1000, 100);
console.log(result);
