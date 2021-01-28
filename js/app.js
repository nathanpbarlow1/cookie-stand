'use strict';

console.log('hello world')

const hrs = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomCustomerPerHour (){
  //gets the randomCustomersPerHour
}

let seattle = {
  // name of variable
  name: 'Seattle',
  // The minimum number of customer per hour
  minimumCustomerEachHour: 23, 
  // The maximum number of customer per hour
  maximumCustomerEachHour: 65,
  // The average number of Cookies for purchased per hour 
  averageCookiesSoldPerCustomer: 6.3,
  // cookies sold per hour array
  cookiesSoldPerHourArray: [16, 20, 35, 48, 56, 77, 93, 144, 119, 84, 61, 23, 42, 57,]
  // will hold the calculated number of cookies sold in the store all day long
  dailyStoreTotal: 0,
  // a method to calculate random number of customer per hour
  // docs used: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Object/Math/random
  randomCustomerEachHour: function() {
    console.log('Im in randomCustomerEachHour');
    //generates a random number of customers inclusive of the minimum and maximum
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour +1) + this.minimumCustomerEachHour);
  },
  // a method to calculate and populate our number of cookies sold per hour array
  calcCookiesSoldEachHour: function () {
    let randomCustomerForOneHour = this.randomCustomerEachHour();
    console.log(randomCustomerForOneHour);
    console.log('I am inside of calcCookiesSoldEachHour');
    
    // do something maybe use a for loop
    // multiply customer number by avg.
    // handle the number by rounding
    // push into the cookiesSoldPerHourArray
  },
  // a method to render the list items.
  render: function (){
    this.calcCookiesSoldEachHour()
    // Get the Seattle div from sales.html
    let 

    console.log('I am in the render method')
    // do something 
  }
};
  
  seattle.render();

// var beeHive = 
//   name: 'cool',
//   yield: ['10 lbs', '15 lbs', '12 lbs'],
//   render: function(){
//     for (let i =0; i <this.yield.length; i++) {
//       var li = document.createElement('li');
//       li.textContent - this.yield[i];
//       seattleList.appendChild(li);
//     }
//   }
// }

// beeHive.render()



  




// var beeHive = {
//   name: 'cool',
//   yield: ['10 lbs', '15 lbs', '12 lbs'],
//   render: function(){
//   // Render this array from this object in a list
//     for (let i =0; i<beeHive.yield.length; i++){
//       var li = document.createElement('li')
//       li.textContent = beeHive.yield[i];
//       seattleList.appendChild(li);
//     }
//   }
// };

// beeHive.render();


// let seattleList = document.getElementById('seattle')


// Uses a method of that object to generate a random number of customers per hour. Objects/amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals; your output for each location should look like this:

