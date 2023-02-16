'use strict';

// GLOBAL VARIABLES
let hours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm', '3pm','4pm','5pm','6pm','7pm'];



let cookiesSection = document.getElementById('cookies');

let saleTables = document.getElementById('sale-table');

let cookieStore = []; //store objects

// HELPER FUNCTION
// function randomNumberOfCustomers (min,max){
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }


//CONSTRUCTOR FUNCTION
function CookiesPerCustomer(name,minCust,maxCust,avgCookieSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookiesPurchased = [];
  this.sum = 0;
}




// METHODS
CookiesPerCustomer.prototype.randomNumberOfCustomers = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};


CookiesPerCustomer.prototype.getCookiesPurchased = function () {
  for (let i = 0; i < hours.length; i++) {
    let numberOfCustomers = this.randomNumberOfCustomers();
    // console.log(this.max,this.min)
    console.log(numberOfCustomers);
    let numberOfCookies = Math.floor(numberOfCustomers * this.avgCookieSale);
    console.log(numberOfCookies);
    this.cookiesPurchased.push(numberOfCookies);
    this.sum += numberOfCookies;
  }

};

CookiesPerCustomer.prototype.render = function () {
  // TABLE
  const data = document.createElement('tr');//row
  saleTables.appendChild(data);
  //let trElement = document.createElement('tr'); // tr === row
  //articleElement.appendChild(articleElement);
  // th === cells attachs to rows
  const dataInfo = document.createElement('td');
  data.appendChild(dataInfo);
  dataInfo.textContent = this.name;
  //data.appendChild(thElement);
  for(let i = 0; i < hours.length; i++) {
    let tdElement = document.createElement('td');
    tdElement.textContent = this.cookiesPurchased[i];
    data.appendChild(tdElement);
  }
  const totalInfo = document.createElement('td');
  data.appendChild(totalInfo);
  totalInfo.textContent = this.sum;
};


function header () {
  const data = document.createElement('tr');
  saleTables.appendChild(data);
  const dataInfo = document.createElement('th');
  data.appendChild(dataInfo);
  data.textContent = 'Store';
  for(let i = 0; i < hours.length; i++) {
    let tdElement = document.createElement('td');
    tdElement.textContent = hours[i];
    data.appendChild(tdElement);
  }
  const totalInfo = document.createElement('td');
  data.appendChild(totalInfo);
  totalInfo.textContent = 'The Total Data';
}

function footer () {
  const data = document.createElement('tr');
  saleTables.appendChild(data);
  const dataInfo = document.createElement('tf');
  data.appendChild(dataInfo);
  data.textContent = 'Complete Total';
  let finalTotal = 0;
  for(let i = 0; i < hours.length; i++) {
    let sum = 0;
    for(let j = 0; j < allCities.length; j++) {
      // sum is storing object array at cookies purchased array
      sum += cookieStore[j].cookiesPurchased[i];
      // final total is storing both array averages
      finalTotal += cookieStore[j].cookiesPurchased[i];
      console.log(cookieStore[j]);
    }
    let tdElement = document.createElement('td');
    tdElement.textContent = sum;
    data.appendChild(tdElement);
  }
  const totalInfo = document.createElement('td');
  data.appendChild(totalInfo);
  totalInfo.textContent = finalTotal;
}



const seattle = new CookiesPerCustomer('Seattle',23,65,6.3);
const tokyo = new CookiesPerCustomer('Tokyo',3,24,1.2);
const dubai = new CookiesPerCustomer ('Dubai',11,38,3.7);
const paris = new CookiesPerCustomer('Paris', 20, 38,2.3);
const lima = new CookiesPerCustomer('Lima',2,16,2.6);

cookieStore.push(seattle,tokyo,dubai,paris,lima);
let allCities = [seattle,tokyo,dubai,paris,lima];
// WILL USE TO CALL ALL

function callAll(){
  header();
  for(let i = 0; i < cookieStore.length; i++) {
    cookieStore[i].randomNumberOfCustomers();
    cookieStore[i].getCookiesPurchased();
    cookieStore[i].render();
  }
  footer();
}

callAll();


//header();
//callAll();
//console.log(callAll());
// seattle.randomNumberOfCustomers();
// seattle.getCookiesPurchased();
// seattle.render();
// console.log(seattle);
// tokyo.randomNumberOfCustomers();
// tokyo.getCookiesPurchased();
// tokyo.render();
// console.log(tokyo);
// dubai.randomNumberOfCustomers();
// dubai.getCookiesPurchased();
// console.log(dubai);
// dubai.render();
// paris.randomNumberOfCustomers();
// paris.getCookiesPurchased();
// paris.render();
// console.log(paris);
// lima.randomNumberOfCustomers();
// lima.getCookiesPurchased();
// lima.render();
// console.log(lima);


// OBJECT LITERALS
// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust:65,
//   avgCookieSale:6.3,
//   cookiesPurchased:[],
//   sum:0,
//   getCookiesPurchased: function() {
//     for (let i = 0; i < hours.length; i++) {
//       let numberOfCustomers = randomNumberOfCustomers(this.minCust,this.maxCust);
//       console.log(numberOfCustomers);
//       let numberOfCookies = Math.floor(numberOfCustomers * this.avgCookieSale);
//       console.log(numberOfCookies);
//       this.cookiesPurchased.push(numberOfCookies);
//       this.sum += numberOfCookies;
//     }
//   },//DOM MANIPULATION 
//   render: function() {
//     let articleElement = document.createElement('article'); 
//     cookiesSection.appendChild(articleElement);

//     let h2Element = document.createElement('h2'); // th === cells attachs to rows
//     h2Element.textContent = this.name;
//     articleElement.appendChild(h2Element);

//     let ulElement = document.createElement('ul'); // tr === row
//     articleElement.appendChild(ulElement);

//     for(let i = 0; i < this.cookiesPurchased.length;i++) {
//       let liElement = document.createElement('li'); // td === attach to row
//       liElement.textContent = `${hours[i]}: ${this.cookiesPurchased[i]} cookies`;
//       ulElement.appendChild(liElement);
//     }

//     let theSum = document.createElement('li'); // td
//     theSum.textContent = `The daily total is ${this.sum} cookies`;
//     ulElement.appendChild(theSum); 

//   }

// };

// let tokyo = {
//   name:'Tokyo',
//   minCust:3,
//   maxCust:24,
//   avgCookieSale:1.2,
//   cookiesPurchased:[],
//   sum:0,
//   getCookiesPurchased: function() {
//     for (let i = 0;i < hours.length;i++) {
//       let numberOfCustomers = randomNumberOfCustomers(this.minCust,this.maxCust);
//       let numberOfCookies = Math.floor(numberOfCustomers * this.avgCookieSale);
//       this.cookiesPurchased.push(numberOfCookies);
//       this.sum += numberOfCookies;
//     }

//   },

//   render: function() {
//     let articleElement = document.createElement('article');
//     cookiesSection.appendChild(articleElement);

//     let h2Element = document.createElement('h2');
//     h2Element.textContent = this.name;
//     articleElement.appendChild(h2Element);

//     let ulElement = document.createElement('ul');
//     articleElement.appendChild(ulElement);

//     for(let i = 0; i < hours.length; i++) {
//       let liElement = document.createElement('li');
//       liElement.textContent = `${hours[i]}: ${this.cookiesPurchased[i]} cookies`;
//       ulElement.appendChild(liElement);
//     } 

//     let theSum = document.createElement('li');
//     theSum.textContent = `The daily total is ${this.sum} cookies`;
//     ulElement.appendChild(theSum); 

//   }
// };

// let dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieSale: 3.7,
//   cookiesPurchased: [],
//   sum:0,
//   getCookiesPurchased: function() {
//     for(let i = 0; i < hours.length; i++) {
//       let numberOfCustomers = randomNumberOfCustomers(this.minCust,this.maxCust);
//       let numberOfCookies = Math.floor(numberOfCustomers * this.avgCookieSale);
//       this.cookiesPurchased.push(numberOfCookies);
//       this.sum += numberOfCookies;
//     }
//   },
//   render: function() {
//     let articleElement = document.createElement('article');
//     cookiesSection.appendChild(articleElement);

//     let h2Element = document.createElement('h2');
//     h2Element.textContent = this.name;
//     articleElement.appendChild(h2Element);

//     let ulElement = document.createElement('ul');
//     articleElement.appendChild(ulElement);

//     for(let i = 0; i < hours.length; i++) {
//       let liElement = document.createElement('li');
//       liElement.textContent = `${hours[i]}: ${this.cookiesPurchased[i]} cookies,`;
//       ulElement.appendChild(liElement);
//     }

//     let theSum = document.createElement('li');
//     theSum.textContent = `The daily total is ${this.sum} cookies`;
//     ulElement.appendChild(theSum);

//   }
// };

// let paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieSale: 2.3,
//   cookiesPurchased:[],
//   sum:0,
//   getCookiesPurchased: function () {

//     for (let i = 0; i < hours.length; i++) {
//       let numberOfCustomers = randomNumberOfCustomers(this.minCust,this.maxCust);
//       let numberOfCookies = Math.floor(numberOfCustomers * this.avgCookieSale);
//       this.cookiesPurchased.push(numberOfCookies);
//       this.sum += numberOfCookies;
//     }
//   },
//   render: function() {
//     let articleElement = document.createElement('article');
//     cookiesSection.appendChild(articleElement);

//     let h2Element = document.createElement('h2');
//     h2Element.textContent = this.name;
//     articleElement.appendChild(h2Element);

//     let ulElement = document.createElement('ul');
//     articleElement.appendChild(ulElement);

//     for(let i = 0; i < hours.length; i++) {
//       let liElement = document.createElement('li');
//       liElement.textContent = `${hours[i]}: ${this.cookiesPurchased[i]} cookies`;
//       ulElement.appendChild(liElement);
//     }
//     let theSum = document.createElement('li');
//     theSum.textContent = `The daily sum is ${this.sum} cookies`;
//     ulElement.appendChild(theSum);

//   }
// };

// let lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieSale: 2.6,
//   cookiesPurchased:[],
//   sum:0,
//   getCookiesPurchased: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let numberOfCustomers = randomNumberOfCustomers(this.minCust,this.maxCust);
//       let numberOfCookies = Math.floor(numberOfCustomers * this. avgCookieSale);
//       this.cookiesPurchased.push(numberOfCookies);
//       this.sum += numberOfCookies;

//     }
//   },
//   render: function() {
//     let articleElement = document.createElement('article');
//     cookiesSection.appendChild(articleElement);

//     let h2Element = document.createElement('h2');
//     h2Element.textContent = this.name;
//     articleElement.appendChild(h2Element);

//     let ulElement = document.createElement('ul');
//     articleElement.appendChild(ulElement);

// for(let i = 0; i < hours.length; i++) {
//   let liElement = document.createElement('li');
//   liElement.textContent = `${hours[i]}: ${this.cookiesPurchased[i]} cookies`;
//       ulElement.appendChild(liElement);
//     }
//     let theSum = document.createElement('li');
//     theSum.textContent = `The daily sum is ${this.sum} cookies`;
//     ulElement.appendChild(theSum);