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
