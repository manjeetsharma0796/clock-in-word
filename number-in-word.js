const lookup = function (number) {
  const numInChar = {
    0: 'ZERO',
    1: 'ONE',
    2: 'TWO',
    3: 'THREE',
    4: 'FOUR',
    5: 'FIVE',
    6: 'SIX',
    7: 'SEVEN',
    8: 'EIGHT',
    9: 'NINE',
    10: 'TEN',
    11: 'ELEVEN',
    12: 'TWELVE',
    13: 'THIRTEEN',
    14: 'FOURTEEN',
    15: 'FIFTEEN',
    16: 'SIXTEEN',
    17: 'SEVENTEEN',
    18: 'EIGHTEEN',
    19: 'NINETEEN',
    20: 'TWENTY',
    30: 'THIRTY',
    40: 'FORTY',
    50: 'FIFTY'
  }

  return numInChar[number];
};


const numberToWord = function (number) {
  if (number > 9 && number < 20 || number % 10 === 0) {
    return `${lookup(number)}`;
  }

  const ones = number % 10;
  const tens = number - ones;

  return `${lookup(tens)}-${lookup(ones)}`;
};

const findMaxOnesLength = function () {
  let maxOnesLength = 0;
  for (let counter = 0; counter < 10; counter++) {
    let currentWordLength = lookup(counter).length;

    if (currentWordLength > maxOnesLength) {
      maxOnesLength = currentWordLength;
    }
  }

  return maxOnesLength;
};

const findMaxTensLength = function () {
  let maxTensLength = 0;
  for (let counter = 10; counter < 60; counter += 10) {
    let currentWordLength = lookup(counter).length;

    if (currentWordLength > maxTensLength) {
      maxTensLength = currentWordLength;
    }
  }

  return maxTensLength;
};

const convertTimeToWord = function (time) { // 12:45:43
  const maxPad = findMaxOnesLength() + findMaxTensLength() + 1; //for separator
  const [hours, minutes, seconds] = time.split(':')

  const hoursInWord = numberToWord(+hours).toString().padStart(maxPad);
  const minutesInWord = numberToWord(+minutes).toString().padStart(maxPad);
  const secondsInWord = numberToWord(+seconds).toString().padStart(maxPad);

  return `${hoursInWord}:${minutesInWord}:${secondsInWord}`;
};

const showTimeInWords = () => {
  let time = new Date();
  let [clock, ...rest] = time.toTimeString().split(' ')

  console.log(convertTimeToWord(clock));
};

setInterval(showTimeInWords, 1000);

exports.convertTimeToWord = convertTimeToWord;