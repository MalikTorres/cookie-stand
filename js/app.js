'use strict';

// GLOBAL VARIABLES 
let hours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm', '3pm','4pm','5pm','6pm','7pm'];

let cookiesSection = document.getElementById('cookies'); 


// HELPER FUNCTION 
function randomNumberOfCustomers (min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// OBJECT LITERALS
let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust:65,
  avgCookieSale:6.3,
  cookiesPurchased:[],
  sum:0,
  getCookiesPurchased: function() {
    for (let i = 0; i < hours.length; i++) {
      let numberOfCustomers = randomNumberOfCustomers(this.minCust,this.maxCust);
      console.log(numberOfCustomers);
      let numberOfCookies = Math.floor(numberOfCustomers * this.avgCookieSale);
      console.log(numberOfCookies);
      this.cookiesPurchased.push(numberOfCookies);
      this.sum += numberOfCookies;
    }
  },//DOM MANIPULATION 
  render: function() {
    let articleElement = document.createElement('article');
    cookiesSection.appendChild(articleElement);

    let h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    articleElement.appendChild(h2Element);

    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for(let i = 0; i < this.cookiesPurchased.length;i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.cookiesPurchased[i]} cookies`;
      ulElement.appendChild(liElement);
    }

    let theSum = document.createElement('li');
    theSum.textContent = `The daily total is ${this.sum} cookies`;
    ulElement.appendChild(theSum); 

  }

};


let tokyo = {
  name:'Tokyo',
  minCust:3,
  maxCust:24,
  avgCookieSale:1.2,
  cookiesPurchased:[],
  sum:0,
  getCookiesPurchased: function() {
    for (let i = 0;i < hours.length;i++) {
      let numberOfCustomers = randomNumberOfCustomers(this.minCust,this.maxCust);
      let numberOfCookies = Math.floor(numberOfCustomers * this.avgCookieSale);
      this.cookiesPurchased.push(numberOfCookies);
      this.sum += numberOfCookies;
    }

  },

  render: function() {
    let articleElement = document.createElement('article');
    cookiesSection.appendChild(articleElement);

    let h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    articleElement.appendChild(h2Element);

    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for(let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.cookiesPurchased[i]} cookies`;
      ulElement.appendChild(liElement);
    } 

    let theSum = document.createElement('li');
    theSum.textContent = `The daily total is ${this.sum} cookies`;
    ulElement.appendChild(theSum); 

  }
};

let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  cookiesPurchased: [],
  sum:0,
  getCookiesPurchased: function() {
    for(let i = 0; i < hours.length; i++) {
      let numberOfCustomers = randomNumberOfCustomers(this.minCust,this.maxCust);
      let numberOfCookies = Math.floor(numberOfCustomers * this.avgCookieSale);
      this.cookiesPurchased.push(numberOfCookies);
      this.sum += numberOfCookies;
    }
  },
  render: function() {
    let articleElement = document.createElement('article');
    cookiesSection.appendChild(articleElement);

    let h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    articleElement.appendChild(h2Element);

    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for(let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.cookiesPurchased[i]} cookies,`;
      ulElement.appendChild(liElement);
    }

    let theSum = document.createElement('li');
    theSum.textContent = `The daily total is ${this.sum} cookies`;
    ulElement.appendChild(theSum);

  }
};

let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  cookiesPurchased:[],
  sum:0,
  getCookiesPurchased: function () {

    for (let i = 0; i < hours.length; i++) {
      let numberOfCustomers = randomNumberOfCustomers(this.minCust,this.maxCust);
      let numberOfCookies = Math.floor(numberOfCustomers * this.avgCookieSale);
      this.cookiesPurchased.push(numberOfCookies);
      this.sum += numberOfCookies;
    }
  },
  render: function() {
    let articleElement = document.createElement('article');
    cookiesSection.appendChild(articleElement);

    let h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    articleElement.appendChild(h2Element);

    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for(let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.cookiesPurchased[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    let theSum = document.createElement('li');
    theSum.textContent = `The daily sum is ${this.sum} cookies`;
    ulElement.appendChild(theSum);

  }
};

let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 2.6,
  cookiesPurchased:[],
  sum:0,
  getCookiesPurchased: function () {
    for (let i = 0; i < hours.length; i++) {
      let numberOfCustomers = randomNumberOfCustomers(this.minCust,this.maxCust);
      let numberOfCookies = Math.floor(numberOfCustomers * this. avgCookieSale);
      this.cookiesPurchased.push(numberOfCookies);
      this.sum += numberOfCookies;

    }
  },
  render: function() {
    let articleElement = document.createElement('article');
    cookiesSection.appendChild(articleElement);

    let h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    articleElement.appendChild(h2Element);

    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for(let i = 0; i < hours.length; i++) {
      let liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.cookiesPurchased[i]} cookies`;
      ulElement.appendChild(liElement);
    }
    let theSum = document.createElement('li');
    theSum.textContent = `The daily sum is ${this.sum} cookies`;
    ulElement.appendChild(theSum);


  }
};

seattle.getCookiesPurchased();
seattle.render();
console.log(seattle);
tokyo.getCookiesPurchased();
tokyo.render();
dubai.getCookiesPurchased();
dubai.render();
paris.getCookiesPurchased();
paris.render();
lima.getCookiesPurchased();
lima.render();
