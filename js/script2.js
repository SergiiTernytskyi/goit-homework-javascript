'use strict';

// function foo() {
//   console.log(this);
// }

// foo();

/////////////////////////////////////////////////////////////////////

// const petya = {
//   username: 'Petya',
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.username);
//   },
// };

// petya.showThis();
// petya.showName();

///////////////////////////////////////////////////////////////////

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: 'Манго',
// };
// const poly = {
//   username: 'Полі',
// };

// greetGuest.call(mango, 'Ласкаво просимо'); // Ласкаво просимо, Манго.
// greetGuest.call(poly, 'З прибуттям'); // З прибуттям, Полі.

/////////////////////////////////////////////////////////////////////

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: 'Манго',
// };
// const poly = {
//   username: 'Полі',
// };

// greetGuest.apply(mango, ['Ласкаво просимо']); // Ласкаво просимо, Манго.
// greetGuest.apply(poly, ['З прибуттям']); // З прибуттям, Полі.

//////////////////////////////////////////////////////////////////////

function greet(clientName) {
  return `${clientName}, ласкаво просимо в «${this.service}».`;
}

const steam = {
  service: 'Steam',
};
const steamGreeter = greet.bind(steam);
steamGreeter('Манго'); // "Манго, ласкаво просимо в «Steam»."
console.log(steamGreeter('Poly'));

const gmail = {
  service: 'Gmail',
};
const gmailGreeter = greet.bind(gmail);
gmailGreeter('Полі'); // "Полі, ласкаво просимо в «Gmail»."
console.log(gmailGreeter('Полі'));

/////////////////////////////////////////////////////////////////////

// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// makeMessage(customer.getFullName.bind(customer)); // Виникне помилка на момент виклику функції

///////////////////////////////////////////////////////////////////////////////////////////////

const historyService = {
  orders: [
    { email: 'jacob@hotmail.com', dish: 'Burrito' },
    { email: 'solomon@topmail.net', dish: 'Burger' },
    { email: 'artemis@coldmail.net', dish: 'Pizza' },
    { email: 'solomon@topmail.net', dish: 'Apple pie' },
    { email: 'jacob@hotmail.com', dish: 'Taco' },
  ],
  // Change code below this line
  getOrdersLog() {
    return this.orders
      .map(order => `email: ${this.order.email} dish: ${this.order.dish}`)
      .join(' - ');
  },
  getEmails() {
    const emails = this.orders.map(order => this.order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter(order => this.order.email === email);
  },
  // Change code above this line
};
