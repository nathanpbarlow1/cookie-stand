'use strict';

//global variables
//Hrs array
const hrs = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let tbody = document.getElementById('tb');
let allStores = [];

const cookieTable = document.querySelector('table')

function NewCookiesStand (name, minimumCustomerEachHour, maximumCustomerEachHour, averageCookiesSoldPerCustomer){
  this.name = name; 
  this.min = minimumCustomerEachHour;
  this.maximumCustomerEachHour = maximumCustomerEachHour;
  this.averageCookiesSoldPerCustomer = averageCookiesSoldPerCustomer;
  this.dailyStoreTotal = 0;
  this.cookiesSoldPerHourArray = []
  allStores.push(this)
};
  
// NewCookiesStand.prototype.calcCookiesSoldEachHour = function () {
//   return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.min);


NewCookiesStand.prototype.randomCustomerEachHour = function () {
  return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
};
// console.log('test2')
NewCookiesStand.prototype.calcCookiesSoldEachHour = function() {
  // console.log('test1')
  for (let i = 0; i <hrs.length; i++) {
    let randomCustomerForOneHour = this.randomCustomerEachHour();
    let hrTotal = Math.ceil(randomCustomerForOneHour * this.averageCookiesSoldPerCustomer);
    this.cookiesSoldPerHourArray.push(hrTotal);
    this.dailyStoreTotal += hrTotal;
  }
};

NewCookiesStand.prototype.render = function () {
  this.calcCookiesSoldEachHour();
  let tr = document.createElement('tr');
  
  let th = document.createElement('th')
  th.textContent = this.name;
  tr.appendChild(th);

  for (let i = 0; i < hrs.length; i++) { 
    let td = document.createElement ('td');
    td.textContent = this.cookiesSoldPerHourArray[i];
    tr.appendChild(td);
    console.log(this.cookiesSoldPerHourArray[i])
  }
  
  let td = document.createElement('td');
  td.textContent = this.dailyStoreTotal;
  tr.appendChild(td);
  tbody.appendChild(tr);
};

// Let renderFooter = function () {
//   let tr = document.getElementById('store toal');
//   let th = document.createElement('th');

// }

let seattle = new NewCookiesStand ('Seattle', 23, 65, 6.3);
let tokyo = new NewCookiesStand ('Tokyo', 3, 24, 1.2);
let dubai = new NewCookiesStand ('Dubai', 11, 38, 3.7);
let paris = new NewCookiesStand ('Paris', 20, 38, 2.3);
let lima = new NewCookiesStand ('Lima', 2, 16, 4.6);

seattle.render();
tokyo.render();
dubai.render();
paris.render()
lima.render();

// // get elements by id for the 5 lists
// var seattleList = document.getElementById('seattle');
// var tokyoList = document.getElementById('tokyo');
// var dubaiList = document.getElementById('dubai');
// var parisList = document.getElementById('paris');
// var limaList = document.getElementById('lima');

// let seattle = {
//   // name of variable
//   name: 'Seattle',
//   // The minimum number of customer per hour
//   minimumCustomerEachHour: 23, 
//   // The maximum number of customer per hour
//   maximumCustomerEachHour: 65,
//   // The average number of Cookies for purchased per hour 
//   averageCookiesSoldPerCustomer: 6.3,
//   // cookies sold per hour array
//   cookiesSoldPerHourArray: [],
//   // cookiesSoldPerHourArray: [16, 20, 35, 48, 56, 77, 93, 144, 119, 84, 61, 23, 42, 57,]
//   // will hold the calculated number of cookies sold in the store all day long
//   dailyStoreTotal: 0,
//   // a method to calculate random number of customer per hour
//   // docs used: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Object/Math/random
//   randomCustomerEachHour: function() {
//     // console.log('Im in randomCustomerEachHour');
//     //generates a random number of customers inclusive of the minimum and maximum
//     return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour +1) + this.minimumCustomerEachHour);
//   },

// // a method to calculate and populate our number of cookies sold per hour array
//   calcCookiesSoldEachHour: function () {
//    for (let i = 0; i <hrs.length; i++) {
//     let randomCustomerForOneHour = this.randomCustomerEachHour();
//     // console.log (randomCustomerForOneHour)
//     let hrTotal = Math.ceil(randomCustomerForOneHour * this.averageCookiesSoldPerCustomer);
//     // console.log(hrTotal);
//     this.cookiesSoldPerHourArray.push(hrTotal)
//     this.dailyStoreTotal += hrTotal;
//     // ^same as this.dailyStoreTotal = this.dailyStoreTotal + hrTotal
//     }
//     // console.log(this.cookiesSoldPerHourArray)
//     // console.log( 'I am in the calcCookiesSoldEachHour method')

//   },
//   //render results. Right now we have 14 hrs. worth of cookie sales
//   render: function () {
//     this.calcCookiesSoldEachHour();
//       // console.log ('I am in the render method')

//       for (let i = 0; i <hrs.length; i++) {
//         // render string as list item
//         // '6am: 16 cookies'
//         // create the element
//         let li = document.createElement('li');
//         // provide content
//         li.textContent = `${hrs[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//         // append it to the DOM
//         seattleList.appendChild(li);
//       }
//       // total
//       let li = document.createElement('li');
//       // give it content
//       li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
//       // append it to the DOM
//       seattleList.appendChild(li);
//   }
// };

// let tokyo = {
//   name: 'Tokyo',
//   minimumCustomerEachHour: 3, 
//   maximumCustomerEachHour: 24,
//   averageCookiesSoldPerCustomer: 1.2,
//   cookiesSoldPerHourArray: [],
//   dailyStoreTotal: 0,

//   randomCustomerEachHour: function() {
//     return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour +1) + this.minimumCustomerEachHour);
//   },
//   calcCookiesSoldEachHour: function () {
//    for (let i = 0; i <hrs.length; i++) {
//     let randomCustomerForOneHour = this.randomCustomerEachHour();
//     let hrTotal = Math.ceil(randomCustomerForOneHour * this.averageCookiesSoldPerCustomer);
//     this.cookiesSoldPerHourArray.push(hrTotal)
//     this.dailyStoreTotal += hrTotal;
//     }

//   },
//   render: function () {
//     this.calcCookiesSoldEachHour()
//       for (let i = 0; i <hrs.length; i++) {
//         let li = document.createElement('li');
//         li.textContent = `${hrs[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//         tokyoList.appendChild(li);
//       }
//       let li = document.createElement('li');
//       li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
//       tokyoList.appendChild(li);
//   }
// };

// let dubai = {
//   name: 'Dubai',
//   minimumCustomerEachHour: 11, 
//   maximumCustomerEachHour: 38,
//   averageCookiesSoldPerCustomer: 3.7,
//   cookiesSoldPerHourArray: [],
//   dailyStoreTotal: 0,
//   randomCustomerEachHour: function() {
//     return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour +1) + this.minimumCustomerEachHour);
//   },
//   calcCookiesSoldEachHour: function () {
//    for (let i = 0; i <hrs.length; i++) {
//     let randomCustomerForOneHour = this.randomCustomerEachHour();
//     let hrTotal = Math.ceil(randomCustomerForOneHour * this.averageCookiesSoldPerCustomer);
//     this.cookiesSoldPerHourArray.push(hrTotal)
//     this.dailyStoreTotal += hrTotal;
//     }

//   },
//   render: function () {
//     this.calcCookiesSoldEachHour()
//       for (let i = 0; i <hrs.length; i++) {
//         let li = document.createElement('li');
//         li.textContent = `${hrs[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//         dubaiList.appendChild(li);
//       }
//       let li = document.createElement('li');
//       li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
//       dubaiList.appendChild(li);
//   }
// };

// let paris = {
//   name: 'Paris',
//   minimumCustomerEachHour: 20, 
//   maximumCustomerEachHour: 38,
//   averageCookiesSoldPerCustomer: 2.3,
//   cookiesSoldPerHourArray: [],
//   dailyStoreTotal: 0,
//   randomCustomerEachHour: function() {
//     return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour +1) + this.minimumCustomerEachHour);
//   },
//   calcCookiesSoldEachHour: function () {
//    for (let i = 0; i <hrs.length; i++) {
//     let randomCustomerForOneHour = this.randomCustomerEachHour();
//     let hrTotal = Math.ceil(randomCustomerForOneHour * this.averageCookiesSoldPerCustomer);
//     this.cookiesSoldPerHourArray.push(hrTotal)
//     this.dailyStoreTotal += hrTotal;
//     }

//   },
//   render: function () {
//     this.calcCookiesSoldEachHour()
//       for (let i = 0; i <hrs.length; i++) {
//         let li = document.createElement('li');
//         li.textContent = `${hrs[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//         parisList.appendChild(li);
//       }
//       let li = document.createElement('li');
//       li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
//       parisList.appendChild(li);
//   }
// };

// let lima = {
//   name: 'Lima',
//   minimumCustomerEachHour: 2, 
//   maximumCustomerEachHour: 16,
//   averageCookiesSoldPerCustomer: 4.6,
//   cookiesSoldPerHourArray: [],
//   dailyStoreTotal: 0,
//   randomCustomerEachHour: function() {
//     return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour +1) + this.minimumCustomerEachHour);
//   },
//   calcCookiesSoldEachHour: function () {
//    for (let i = 0; i <hrs.length; i++) {
//     let randomCustomerForOneHour = this.randomCustomerEachHour();
//     let hrTotal = Math.ceil(randomCustomerForOneHour * this.averageCookiesSoldPerCustomer);
//     this.cookiesSoldPerHourArray.push(hrTotal)
//     this.dailyStoreTotal += hrTotal;
//     }

//   },
//   render: function () {
//     this.calcCookiesSoldEachHour()
//       for (let i = 0; i <hrs.length; i++) {
//         let li = document.createElement('li');
//         li.textContent = `${hrs[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//         limaList.appendChild(li);
//       }
//       let li = document.createElement('li');
//       li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
//       limaList.appendChild(li);
//   }
// };


