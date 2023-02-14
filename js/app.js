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
  getCookiesPurchased: function() {
    for (let i = 0; i < hours.length; i++) {
      let numberOfCustomers = randomNumberOfCustomers(this.minCust,this.maxCust);
      console.log(numberOfCustomers);
      let numberOfCookies = Math.floor(numberOfCustomers * this.avgCookieSale);
      console.log(numberOfCookies);
      this.cookiesPurchased.push(numberOfCookies);
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

  }

};




let tokyo = {
  name:'Tokyo',
  minCust:3,
  maxCust:24,
  avgCookieSale:1.2,
  cookiesPurchased:[],
  getCookiesPurchased: function() {
    for (let i = 0;i < hours.length;i++) {
      let numberOfCustomers = randomNumberOfCustomers(this.minCust,this.maxCust);
      let numberOfCookies = Math.floor(numberOfCustomers * this.avgCookieSale);
      this.cookiesPurchased.push(numberOfCookies);
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

  }
};

let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  cookiesPurchased: [],
  getCookiesPurchased: function() {
    for(let i = 0; i < hours.length; i++) {
      let numberOfCustomers = randomNumberOfCustomers(this.minCust,this.maxCust);
      let numberOfCookies = Math.floor(numberOfCustomers * this.avgCookieSale);
      this.cookiesPurchased.push(numberOfCookies);
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
  }
};

let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  cookiesPurchased:[],
  getCookiesPurchased: function () {

    for (let i = 0; i < hours.length; i++) {
      let numberOfCustomers = randomNumberOfCustomers(this.minCust,this.maxCust);
      let numberOfCookies = Math.floor(numberOfCustomers * this.avgCookieSale);
      this.cookiesPurchased.push(numberOfCookies);
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
  }
};

let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 2.6,
  cookiesPurchased:[],
  getCookiesPurchased: function () {
    for (let i = 0; i < hours.length; i++) {
      let numberOfCustomers = randomNumberOfCustomers(this.minCust,this.maxCust);
      let numberOfCookies = Math.floor(numberOfCustomers * this. avgCookieSale);
      this.cookiesPurchased.push(numberOfCookies);

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

  }
};

seattle.getCookiesPurchased();
seattle.render();
tokyo.getCookiesPurchased();
tokyo.render();
dubai.getCookiesPurchased();
dubai.render();
paris.getCookiesPurchased();
paris.render();
lima.getCookiesPurchased();
lima.render();
