var findLongestWord = function(words) {
  var wordLength = 0;
  var longestWordIndex = 0;
  var arrayLength = words.length;
  for (var i = 0; i < arrayLength; i++) {
    if(words[i].length > wordLength) {
      wordLength = words[i].length;
      longestWordIndex = i;
    }
  }
  return wordLength;
};

var sum = function(numbers) {
  var sum = 0;
  var arrayLength = numbers.length;
  for (var i = 0; i < arrayLength; i++) {
    sum += numbers[i];
  }
  return sum;
};

var multiply = function(numbers) {
  var total = 1;
  var arrayLength = numbers.length;
  for (var i = 0; i < arrayLength; i++) {
    total *= numbers[i];
  }
  return total;
};

var evaluateExpression = function(varA, varB, expression) {
  if(isNaN(varA) || isNaN(varB)) {
    return "Arguments should be numbers.";
  }
  switch(expression) {
    case "+":
      return varA + varB;
      break;
    case "-":
      return varA - varB;
      break;
    case "*":
      return varA * varB;
      break;
    case "/":
      return varA / varB;
      break;
    default:
      return "Expression is invalid.";
  }
};

var duplicate = function(numbers) {
  var arrayLength = numbers.length;
  for (var i = 0; i < arrayLength; i++) {
    numbers.push(numbers[i]);
  }
  return numbers;
};

var fizzBuzz = function(num) {
  if (num % 3 == 0) {
    if (num % 5 == 0) {
      return "FizzBuzz";
    }
    else {
      return "Fizz";
    }
  }
  else if (num % 5 == 0) {
    return "Buzz";
  }
  else {
    return num;
  }
};
