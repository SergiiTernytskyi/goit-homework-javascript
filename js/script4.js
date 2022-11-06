// function removeExclamationMarks(s) {
//   let result = [];
//   s.split('').forEach(element => {
//     if (element !== '!') {
//       result.push(element);
//     }
//   });

//   return result.join('');
// }
// console.log(removeExclamationMarks('Hello World!'));

// function findShort(s) {
//   let length = s.split(' ')[0].length;
//   s.split(' ').forEach(element => {
//     if (element.length < length) {
//       length = element.length;
//     }
//   });
//   return length;
// }

// //3
// console.log(findShort('bitcoin take over the world maybe who knows perhaps'));

// //3
// console.log(findShort('turns out random test cases are easier than writing out basic ones'));

// //2
// console.log(findShort("Let's travel abroad shall we"));

// function getDivisorsCnt(n) {
//   let divisorsCount = 0;
//   for (let i = 0; i <= n; i += 1) {
//     if (n % i === 0) {
//       divisorsCount += 1;
//     }
//   }
//   return divisorsCount;
// }

// //1
// console.log(getDivisorsCnt(1));

// //4
// console.log(getDivisorsCnt(10));

// //2
// console.log(getDivisorsCnt(11));

// //8
// console.log(getDivisorsCnt(54));

// const friend = friends => friends.filter(element => element.length === 4);
// //["Ryan", "Mark"]
// console.log(friend(['Ryan', 'Kieran', 'Mark']));

// //["Ryan"]
// console.log(friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man']));

// //["Jimm", "Cari", "aret"]
// console.log(friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool']));

// //["Love", "Your", "Face"]
// console.log(friend(['Love', 'Your', 'Face', '1']));

// function calculateYears(principal, interest, tax, desired) {
//   let res = principal + principal * interest - principal * interest * tax;
//   let years = 1;

//   if (principal === desired) {
//     return (years = 0);
//   }

//   if (res < desired) {
//     do {
//       res += res * interest - res * interest * tax;
//       years += 1;
//     } while (res <= desired);
//   }

//   return years;
// }

// //3
// console.log(calculateYears(1000, 0.05, 0.18, 1100));

// //14
// console.log(calculateYears(1000, 0.01625, 0.18, 1200));

// //0
// console.log(calculateYears(1000, 0.05, 0.18, 1000));

// function countBy(x, n) {
//   let z = [];
//   let i = 1;

//   do {
//     if (i % x === 0) {
//       z.push(i);
//     }
//     i += 1;
//   } while (z.length <= n - 1);

//   return z;
// }

// //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(countBy(1, 10));

// //[2, 4, 6, 8, 10]
// console.log(countBy(2, 5));

// const removeChar = str => str.slice(1, str.length - 1);

// //'loquen'
// console.log(removeChar('eloquent'));

// //'ountr'
// console.log(removeChar('country'));

// //'erso'
// console.log(removeChar('person'));

// //'lac'
// console.log(removeChar('place'));

// //'oopss'
// console.log(removeChar('ooopsss'));

// function basicOp(operation, value1, value2) {
//   switch (operation) {
//     case '+':
//       return value1 + value2;

//     case '-':
//       return value1 - value2;

//     case '/':
//       return value1 / value2;

//     case '*':
//       return value1 * value2;
//   }
// }

// //11
// console.log(basicOp('+', 4, 7));

// //-3
// console.log(basicOp('-', 15, 18));

// //25
// console.log(basicOp('*', 5, 5));

// //7
// console.log(basicOp('/', 49, 7));

// function isIsogram(str) {
//   const arr = str.toLowerCase().split('');
//   arr
//     .map(elem => {
//       console.log(elem);
//     })
//     .reduce((acc, letter) => {});
// }

// //true
// console.log(isIsogram('Dermatoglyphics'));

// // //true
// // console.log(isIsogram('isogram'));

// // //false
// // console.log(isIsogram('aba'));

// // //false
// // console.log(isIsogram('moOse'));

// // //false
// // console.log(isIsogram('isIsogram'));

// // //true
// // console.log(isIsogram(''));

// function tribonacci(signature, n) {
//   const arr = signature;

//   if (n === 0) {
//     return [];
//   }
//   if (n <= arr.length) {
//     return arr.slice(0, n);
//   }
//   do {
//     let nextElem = arr.slice(arr.length - 3, arr.length).reduce((acc, elem) => {
//       return acc + elem;
//     }, 0);
//     arr.push(nextElem);
//   } while (arr.length < n);

//   return arr;
// }

// // doTest([[0, 0, 1], 10], [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]);
// console.log(tribonacci([0, 0, 1], 10));

// //doTest([[1, 1, 1], 10], [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]);
// console.log(tribonacci([1, 1, 1], 10));

// // doTest([[0, 1, 1], 10], [0, 1, 1, 2, 4, 7, 13, 24, 44, 81]);
// console.log(tribonacci([0, 1, 1], 10));

// // doTest([[1, 0, 0], 10], [1, 0, 0, 1, 1, 2, 4, 7, 13, 24]);
// console.log(tribonacci([1, 0, 0], 10));

// // doTest([[0, 0, 0], 10], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
// console.log(tribonacci([0, 0, 0], 10));

// // doTest([[1, 2, 3], 10], [1, 2, 3, 6, 11, 20, 37, 68, 125, 230]);
// console.log(tribonacci([1, 2, 3], 10));

// // doTest([[3, 2, 1], 10], [3, 2, 1, 6, 9, 16, 31, 56, 103, 190]);
// console.log(tribonacci([3, 2, 1], 10));

// // doTest([[1, 1, 1], 1], [1]);
// console.log(tribonacci([1, 1, 1], 1));

// // doTest([[300, 200, 100], 0], []);
// console.log(tribonacci([300, 200, 100], 0));

// function setAlarm(employed, vacation) {
//   if (employed && !vacation) {
//     return true;
//   }
//   return false;
// }

// //false
// console.log(setAlarm(true, true));

// //false
// console.log(setAlarm(false, true));

// //true
// console.log(setAlarm(true, false));

function findUniq(arr) {
  const res = [];
  for (const number of arr) {
    if (!res.includes(number)) {
      res.push(number);
    }
  }
  return res;

  //   return arr.filter((elem, index, array) => {
  //     return array.indexOf(elem) === index;
  //   });
}

//1
console.log(findUniq([1, 0, 0]));
console.log(findUniq([0, 1, 0]));
console.log(findUniq([0, 0, 1]));

//2
console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([1, 1, 2, 1, 1]));

//10
console.log(findUniq([3, 10, 3, 3, 3]));
