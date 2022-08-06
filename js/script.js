// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   const messageNormalized = message.toLowerCase();
//   result = messageNormalized.includes('spam') || messageNormalized.includes('sale');

//   // Change code above this line
//   return result;
// }

// console.log(checkForSpam('Latest technology news'));
// console.log(checkForSpam('JavaScript weekly newsletter'));
// console.log(checkForSpam('Get best sale offers now!'));
// console.log(checkForSpam('Amazing SalE, only tonight!'));
// console.log(checkForSpam('Trust me, this is not a spam message'));
// console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!'));
// console.log(checkForSpam('[SPAM] How to earn fast money?'));

//////////////////////////////////////////////////////////////////////////////

// const a = [1, 2, 3, 5, -5, -10];
// const b = Math.min(a);
// console.log(b);

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }

// console.log(splitMessage('Mango hurries to the train', ' ')); //["Mango", "hurries", "to", "the", "train"]
// console.log(splitMessage('Mango', '')); //["M", "a", "n", "g", "o"]
// console.log(splitMessage('best_for_week', '_')); //["best", "for", "week"]

/////////////////////////////////////////////////////////////////////////////

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   let words;
//   let totalPrice = 0;
//   words = message.split(' ');
//   for (const word of words) {
//     totalPrice += pricePerWord;
//   }
//   return totalPrice;
//   // Change code above this line
// }

// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
// console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
// console.log(calculateEngravingPrice('Web-development is creative work', 40));
// console.log(calculateEngravingPrice('Web-development is creative work', 20));

///////////////////////////////////////////////////////////////////////////////

// function slugify(title) {
//   // Change code below this line

//   let normalizedTitle;
//   normalizedTitle = title.toLowerCase();

//   let array;
//   array = normalizedTitle.split(' ');

//   let slug;
//   slug = array.join('-');
//   return slug;

//   // Change code above this line
// }
// console.log(slugify('Arrays for begginers'));
// console.log(slugify('English for developer'));
// console.log(slugify('Ten secrets of JavaScript'));
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));

////////////////////////////////////////////////////////////////////////////

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   let fullArray;
//   fullArray = firstArray.concat(secondArray);

//   let newArray;
//   newArray = fullArray.slice(0, maxLength);

//   return newArray;
//   // Change code above this line
// }

// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0));

/////////////////////////////////////////////////////////////////////////////

// function calculateTotal(number) {
//   // Change code below this line
//   let total = 0;
//   for (i = 0; i <= number; i += 1) {
//     total += i;
//   }

//   return total;
//   // Change code above this line
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));

//////////////////////////////////////////////////////////////////////////////////

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

///////////////////////////////////////////////////////////////////////////////

// function findLongestWord(string) {
//   // Change code below this line
//   let words;
//   words = string.split(' ');

//   let longestWord = words[0];

//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
//   // Change code above this line
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));

////////////////////////////////////////////////////////////////////////////////

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

////////////////////////////////////////////////////////////////////////////////

// function filterArray(numbers, value) {
//   // Change code below this line

//   const array = [];
//   for (const number of numbers) {
//     if (number > value) {
//       array.push(number);
//     }
//   }

//   return array;

//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

////////////////////////////////////////////////////////////////////////////////

// function getCommonElements(array1, array2) {
//   const commonElements = [];

//   for (const element of array1) {
//     if (array2.includes(element)) {
//       commonElements.push(element);
//     }
//   }
//   return commonElements;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

////////////////////////////////////////////////////////////////////////////////

function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}
