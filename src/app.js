import Scripts from './challenges';
import React from 'react';
import ReactDOM from 'react-dom';

var allCards = {};
var cardTitles = [];
var currentContent = 'webApps';

document.addEventListener("DOMContentLoaded", function () {

  initWebApps(true)

});

function initWebApps(isInitialLoad) {
  if(currentContent === 'scripts' || isInitialLoad) {
    createCards();
    populateMenu(cardTitles);
    activeCard(allCards.card1);
    addButtons();
    currentContent = 'webApps'
  }
}

function initScripts() {
  if(currentContent === 'webApps') {
    // empty card array or else the menu will keep growing
    // when returning to webApps
    cardTitles = [];
    activateScripts();
    currentContent = 'scripts';
  }
}

function activateScripts() {
  document.getElementById('menu').innerHTML = '';
  document.getElementById('presentation').innerHTML = '';

  ReactDOM.render(
    <Scripts />,
    document.getElementById('menu')
  );

  addButtons();
}


function activeCard(card) {
  // display the active card
  var activeContainer = document.getElementById('presentation');
  activeContainer.innerHTML = '';
  activeContainer.appendChild(card);
}

function cardTitleClicked(newActiveCard) {
  // handles click on card Titles in the card menu
  // made a different function in case of more
  // customization is needed
  activeCard(newActiveCard)
}

function populateMenu(arr) {
  // adds all titles to the left menu.
  // it can be called with a filtered list of titles
  // so the cards can be sorted by the technology used in creating them.

  // remove clear button (if any)
  var filterButton = document.getElementById('filterButton');
  if(filterButton) {
    filterButton.outerHTML = '';
  }

  // empty the menu, useful when applying filters
  var menu = document.getElementById('menu');
  menu.innerHTML = '';

  //re add buttons

  addButtons();

  arr.forEach(function(e) {
    var elem = e[Object.keys(e)[0]];
    elem.className = 'menu-item';
    menu.appendChild(elem);
  })
}

function filterMenu(tech) {

  // filters the menu by clicked technology
  var techArr = [];
  for(var item in allCards) {
    if(allCards.hasOwnProperty(item)) {
      var all = allCards[item].getElementsByClassName('single-lib');
      for(var i = 0; i < all.length; i++) {
        if(all[i].childNodes[0].title === tech) {
          cardTitles.forEach(function(e) {
            if(e.hasOwnProperty(item)) {
              techArr.push(e);
            }
          })
        }
      }
    }
  }
  populateMenu(techArr);
  var filterButton = document.createElement('button');
  filterButton.className = 'filter-button';
  filterButton.id = 'filterButton';
  filterButton.innerHTML = 'Clear Filter';
  filterButton.addEventListener('click', function(){populateMenu(cardTitles)}, false);
  document.getElementById('buttCont').appendChild(filterButton)

}




function libUrl(lib) {
  // url's to framework icons
  var allUrls = {
    Node: "http://i.imgur.com/kj7Vf48.png",
    Meteor: "http://i.imgur.com/omS8IRf.png",
    Bootstrap: "http://i.imgur.com/QoiOUgk.png",
    Python: "http://i.imgur.com/amG0nzx.png",
    "Material UI": "http://i.imgur.com/CyxO34A.png",
    React: "http://i.imgur.com/7joJzVB.png",
    jQuery: "http://i.imgur.com/ONbLw10.png",
    mongoDB: "http://i.imgur.com/QYRfoqQ.png",
    D3: "http://i.imgur.com/rnBzCfm.png",
    Highcharts: "http://i.imgur.com/9R1IGev.png"
  };

  return allUrls[lib];
}

function createCards() {
  // create a card for each site, new sites can be added at any time
  // all fields are mandatory!
  allCards.card1 = new Card(
    'card1',
    'Pinterest Clone',
    'http://i.imgur.com/XSnb4j3.png',
    ['Meteor', 'React', 'Material UI'],
    'There is no formal license attached. You are free to tinker with it and share the results with your friends, but please dont distribute binaries publicly without my permission. I still expect every user to pay for a license, unless you have a good reason not to.',
    'site-url.com', 'SITE-GIT.COM'
  );

  allCards.card2 = new Card(
    'card2',
    'Book Club',
    'http://i.imgur.com/OwJhNO3.png',
    ['Meteor', 'React', 'Material UI', 'Bootstrap'],
    'an other very cool looking site',
    'site-url.com', 'SITE-GIT.COM'
  );

  allCards.card3 = new Card(
    'card3',
    'Stock Market Graph',
    'http://i.imgur.com/sjDdLml.png',
    ['Meteor', 'React', 'Material UI', 'Bootstrap', 'Highcharts'],
    'an other very cool looking site',
    'site-url.com', 'SITE-GIT.COM'
  );

  allCards.card4 = new Card(
    'card4',
    'Poll App',
    'http://i.imgur.com/u70EtYy.png',
    ['Meteor', 'React', 'Material UI', 'Bootstrap', 'D3'],
    'an other very cool looking site',
    'site-url.com', 'SITE-GIT.COM'
  );

  activeCard(allCards.card1);
}

function addButtons() {
  var menu = document.getElementById('menu');
  var button1 = document.createElement('button');
  var button2 = document.createElement('button');
  var container = document.createElement('div');
  button1.className = 'toggle-button';
  button2.className = 'toggle-button';
  container.className = 'toggle-button-container';
  button1.id = 'scripts';
  button2.id = 'webApps';
  button1.innerHTML = 'Scripts';
  button2.innerHTML = 'WebApps';
  button1.addEventListener('click', scriptsClick, false);
  button2.addEventListener('click', webAppsClick, false);

  container.appendChild(button1);
  container.appendChild(button2);

  menu.appendChild(container);
}

function scriptsClick(e) {
  e.preventDefault();
  return initScripts();
}

function webAppsClick(e) {
  e.preventDefault();
  return initWebApps();
}

var Card = function (id, title, picture, libs, description, url, gitUrl) {

  // initialize HTML objects
  var card = document.createElement('div');
  var cardTitle = document.createElement('div');
  var cardPicture = document.createElement('img');
  var cardLibs = document.createElement('div');
  var cardDescription = document.createElement('div');
  var buttonsContainer = document.createElement('div');
  var cardUrl = document.createElement('button');
  var cardGit = document.createElement('button');

  // add classes to HTML objects
  card.id = id;
  card.className = 'card';
  cardTitle.classname = 'card-title';
  cardPicture.className = 'card-picture';
  cardLibs.className = 'card-libs';
  cardDescription.className = 'card-description';
  buttonsContainer.className = 'buttons-container';
  buttonsContainer.id = 'buttCont';
  cardUrl.className = 'card-url';
  cardGit.className = 'card-git';

  // append child elements to main element (card);
  card.appendChild(cardPicture);
  card.appendChild(cardLibs);
  card.appendChild(cardDescription);
  buttonsContainer.appendChild(cardUrl);
  buttonsContainer.appendChild(cardGit);
  cardLibs.appendChild(buttonsContainer);

  // push title to titles array
  var titleObject = {};
  titleObject[id] = cardTitle;
  cardTitles.push(titleObject);

  // add attributes to elements
  cardPicture.src = picture;
  addLibs();
  cardDescription.innerHTML = description;
  cardUrl.innerHTML = 'Site';
  cardGit.innerHTML = 'Repo';
  cardTitle.innerHTML = title;

  // add onClick to card title in the menu
  cardTitle.addEventListener('click', function(){cardTitleClicked(card)}, false);


  function addLibs() {
    libs.forEach(function (element) {
      var lib = document.createElement('div');
      var libPic = document.createElement('img');

      lib.className = 'single-lib';
      libPic.className = 'lib-pic';

      libPic.src = libUrl(element);
      libPic.title = element;
      lib.addEventListener('click', function(){filterMenu(element)}, false);
      lib.appendChild(libPic);
      cardLibs.appendChild(lib);
    })
  }

  return card;

};








