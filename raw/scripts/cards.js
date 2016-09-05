export default function createCards() {

  let allCards = [];

  // create a card for each site, new sites can be added at any time
  // all fields are mandatory!
  allCards.push(new Card(
    'card1',
    'Pinterest Clone',
    'http://i.imgur.com/XSnb4j3.png',
    ['Meteor', 'React', 'Material UI'],
    'There is no formal license attached. You are free to tinker with it and share the results with your friends, but please dont distribute binaries publicly without my permission. I still expect every user to pay for a license, unless you have a good reason not to.',
    'site-url.com',
    'SITE-GIT.COM'
  ));

  allCards.push(new Card(
    'card2',
    'Book Club',
    'http://i.imgur.com/OwJhNO3.png',
    ['Meteor', 'React', 'Material UI', 'Bootstrap'],
    'an other very cool looking site',
    'site-url.com',
    'SITE-GIT.COM'
  ));

  allCards.push(new Card(
    'card3',
    'Stock Market Graph',
    'http://i.imgur.com/sjDdLml.png',
    ['Meteor', 'React', 'Material UI', 'Bootstrap', 'Highcharts'],
    'an other very cool looking site',
    'site-url.com',
    'SITE-GIT.COM'
  ));

  allCards.push(new Card(
    'card4',
    'Poll App',
    'http://i.imgur.com/u70EtYy.png',
    ['Meteor', 'React', 'Material UI', 'Bootstrap', 'D3'],
    'an other very cool looking site',
    'site-url.com',
    'SITE-GIT.COM'
  ));

  return allCards;
}


var Card = function (id, title, picture, libs, description, url, gitUrl) {
  return {
    id: id,
    title: title,
    picture: picture,
    libs: libs,
    description: description,
    url: url,
    gitUrl: gitUrl
  }
};