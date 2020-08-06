/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];


/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}


const dSix = document.querySelector('#d6-roll').src = "images/start/d6.png"

const doubleD1 = document.querySelector('#double-d6-roll-1').src = "images/start/d6.png"
const doubleD2 = document.querySelector('#double-d6-roll-2').src = "images/start/d6.png"

const d12 = document.querySelector('#d12-roll').src = "images/start/d12.jpeg"

const d20 = document.querySelector('#d20-roll').src = "images/start/d20.jpg"

const reset = document.querySelector('#reset-button')

/*******************
 * YOUR CODE BELOW *
 *******************/

const sixRoll = function(){
let result = getRandomNumber(6);
document.querySelector('#d6-roll').scr = `images/d6/${result}.png`
sixes.push(result)
document.querySelector('#d6-rolls-mean').innerText = mean(sixes);
document.querySelector('#d6-rolls-median').innerText = median(sixes)
document.querySelector('#d6-rolls-mode').innerText = mode(sixes)
}

const doubleRoll = function(){
let result1 = getRandomNumber(6)
let result2 = getRandomNumber(6)
document.querySelector('#double-d6-roll-1').src = `images/d6/${result1}.png`
document.querySelector('#double-d6-roll-2').src = `images/d6/${result2}.png`
doubleSixes.push(result1, result2)
document.querySelector('#double-d6-rolls-mean').innerText = mean(doubleSixes)
document.querySelector('#double-d6-rolls-median').innerText = median(doubleSixes)
document.querySelector('#double-d6-rolls-mode').innerText = mode(doubleSixes)
}

const twelveRoll = function(){
let result = getRandomNumber(12)
document.querySelector('#d12-roll').src = `images/numbers/${result}.png`
twelves.push(result)
document.querySelector('#d12-rolls-mean').innerText = mean(twelves)
document.querySelector('#d12-rolls-median').innerText = median(twelves)
document.querySelector('#d12-rolls-mode').innerText = mode(twelves)
}

const twentiesRoll = function(){
let result = getRandomNumber(20)
document.querySelector('#d20-roll').src = `images/numbers/${result}.png`
twenties.push(result)
document.querySelector('#d20-rolls-mean').innerText = mean(twenties)
document.querySelector('#d20-rolls-median').innerText = median(twenties)
document.querySelector('#d20-rolls-mode').innerText = mode(twenties)
}


/*******************
 * EVENT LISTENERS *
 *******************/
document.querySelector("#d6-button").addEventListener("click", sixRoll);
document.querySelector("#double-d6-buttons").addEventListener("click", doubleRoll);
document.querySelector("#d12-button").addEventListener("click", twelveRoll);
document.querySelector("#d20-button").addEventListener("click", twentiesRoll);

/******************
 * RESET FUNCTION *
 ******************/
const resetButton = function(){
document.querySelector('#d6-roll').src = "images/start/d6.png"
document.querySelector('#double-d6-roll-1').src = "images/start/d6.png"
document.querySelector('#double-d6-roll-2').src = "images/start/d6.png"
document.querySelector('#d12-roll').src = "images/start/d12.jpeg"
document.querySelector('#d20-roll').src = "images/start/d20.jpg" 
sixes.splice(0)
doubleSixes.splice(0)
twelves.splice(0)
twenties.splice(0)

}
/****************
 * MATH SECTION *
 ****************/
function mean(nums) {
  var total = 0, i;
  for (i = 0; i < nums.length; i += 1) {
      total += nums[i];
  }
  return total / nums.length;
}

function median(numbers) {
  let median = 0, numsLen = numbers.length;
  numbers.sort();

  if (
      numsLen % 2 === 0 // is even
  ) {
      // average of two middle numbers
      median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
  } else { // is odd
      // middle number only
      median = numbers[(numsLen - 1) / 2];
  }

  return median;
}

function mode(numbers) {
  let modes = [], count = [], i, number, maxIndex = 0;

  for (i = 0; i < numbers.length; i += 1) {
      number = numbers[i];
      count[number] = (count[number] || 0) + 1;
      if (count[number] > maxIndex) {
          maxIndex = count[number];
      }
  }

  for (i in count)
      if (count.hasOwnProperty(i)) {
          if (count[i] === maxIndex) {
              modes.push(Number(i));
          }
      }

  return modes;
}