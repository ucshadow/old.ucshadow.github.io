export default function createCards() {

  let allCards = [];

  // create a card for each site, new sites can be added at any time
  // all fields are mandatory!

  allCards.push(new Card(
    'tp',
    'Tribute Page',
    'http://i.imgur.com/cKw4M7b.png',
    'tribute.png',
    ['React', 'Bootstrap'],
    'My first serious project. It looks basic and has no functionality but this is my first try at ' +
    'using React and Bootstrap. I still remember the "dangerouslySetInnerHTML" fuss because ' +
    "I could't get rid of a React warning. Now looking at it, a simple " + "<" + "img src={source} /> " +
    'would have been enough',
    'http://codepen.io/_catalin/pen/oxwQEq',
    null,
    27
  ));

  allCards.push(new Card(
    'pp1',
    'Personal Portfolio',
    'http://i.imgur.com/XbGKot7.png',
    'portfolio.png',
    ['React', 'Bootstrap', 'jQuery'],
    'This was, at that time, my portfolio. Pretty unimpressive. What it reads in the description about me was true' +
    '. Since then I have discovered Material Design and sites like https://color.adobe.com/ for creating ' +
    'color palettes. I have also been reading /r/web_design every day and browsed a lot of inspirational sites. ' +
    'What I remember form here is the scroll animation and the fact that I had to use a whole library for it, ' +
    "so since I have used it, I should put it in the tech bar. Also here is where I found out that you can't hotlink " +
    'imgur to codepen, so from there since I was stuck with imgbox.',
    'http://codepen.io/_catalin/pen/NNaYom',
    null,
    26
  ));

  allCards.push(new Card(
    'gol',
    'The Game of Life',
    'http://i.imgur.com/NGoS8QB.png',
    'gol.png',
    ['React'],
    'My first real challenge. This was the project that took me the most to finish. The documentation, the ' +
    'complexity, the setIntervals, the slight OOP nature of the project, all these gave me a couple of ' +
    'sleepless nights. The ideas kept coming but the implementation always felt short, so I started studying ' +
    'actual code on rosettacode.org to get a hang of the general approach. If I remember correctly the thing ' +
    'that I did wrong is that the generation calculations for each cell was done in a loop, so a cell with ' +
    'a lower index would behave as a new generation cell for a neighbouring cell with a higher index, so it ' +
    'would screw up my calculations. What I have learned from this is that looking at other ' +
    "people's code is way more productive than trying to reinvent the wheel, as long as you " +
    'actually try to implement something, and not just mindless copy-pasting. ' +
    'The thing that I am most proud is the fact that you can add live cells as the game runs, no need to ' +
    'pause. This project also opened the door for SVG.',
    'http://codepen.io/_catalin/pen/oxqRxG',
    null,
    7
  ));

  allCards.push(new Card(
    'rb',
    'Recipe Box',
    'http://i.imgur.com/ahkeA8c.png',
    'recipes.png',
    ['React', 'Bootstrap', 'jQuery'],
    'Mmmm pancakes. This project was the one that really taught me about State, the React State ' +
    'to be more precise. I had a general idea about how it works but after this project I felt like I was ' +
    'more knowledgeable about it. ' +
    'Here is where I first learned about localStorage and I remember about ' +
    'a JSON error that took me half a day to fix, but I do not remember the specific error. The site looks ' +
    'pleasing to the eye, the design has slightly improved, also while working at it I have discovered ' +
    'the usage of float and all of a sudden the positioning of elements looked way easier than before.',
    'http://codepen.io/_catalin/pen/VaEZVK',
    null,
    8
  ));

  allCards.push(new Card(
    'fcclb',
    'Freecodecamp Leaderboard',
    'http://i.imgur.com/tvuQUzL.png',
    'leader.png',
    ['React', 'Bootstrap', 'jQuery'],
    'The infamous React Ajax. It took a while to make it work. Here is where I have learned ' +
    'about a React Component Specs and Lifecycle. I have read and re read the React docs and  ' +
    'stackoverflow until I got it. This project is also the one that I really studied the bootstrap ' +
    'grid system. Here is where I also learned about .bind(this).',
    'http://codepen.io/_catalin/pen/WwaRKB',
    null,
    9
  ));

  allCards.push(new Card(
    'mdp',
    'Markdown Previewer',
    'http://i.imgur.com/4NKcaRR.png',
    'markdown.png',
    ['React'],
    'Pretty self explanatory. This is just a markdown interpreter like the one github uses' +
    ". I just had to use a library to do the heavy lifting, but that's pretty much it. ",
    'http://codepen.io/_catalin/pen/BKqWrN',
    null,
    25
  ));

  allCards.push(new Card(
    'bc',
    'Visualize Data with a Bar Chart',
    'http://i.imgur.com/mjg4XDg.png',
    'bar.png',
    ['React', 'jQuery', 'D3'],
    'My first D3 project. I previously had some experience with Matplotlib in Python ' +
    'but this was a different beast all together. What I did not know about D3 is that all the data ' +
    'is displayed relative to the declared domain and range of the graph, so in this first project ' +
    'I tried to fit the bars in by hand, with pretty good success. This looks good for a basic graph ' +
    "but later down the road, when graph get more complex, this won't do so I will find this out the hard way. " +
    'One thing I did by myself here and it turned out so good that I just reused it all over my D3 projects ' +
    'was the tooltip. After a lot of fight with jQuery tooltip, D3 tooltip library and different html tricks ' +
    'that had no success I decided to roll my own tooltip component, and although the style is lacking, ' +
    'the functionality is in par if not even better than what I have seen those mentioned libraries do. ' +
    'Another thing to note is that I kept using React, even tho it was completely unnecessary, because ' +
    'why not consolidate your knowledge given the chance?',
    'http://codepen.io/_catalin/pen/yOQwPZ',
    null,
    24
  ));

  allCards.push(new Card(
    'spg',
    'Visualize Data with a Scatterplot Graph',
    'http://i.imgur.com/mkbi2Cy.png',
    'scatter.png',
    ['React', 'jQuery', 'D3'],
    'This project was the one that made me truly learn the secrets of D3. From how domain and range work ' +
    'to ticks format, D3 time format, axis styling and even SVG tricks like inserting HTML directly into SVG. ' +
    'After completing this project I could have said that I had some clue what D3 is about. ' +
    'What I found out while working on this even tho it had nothing to do with data visualisation was that ' +
    'text displayed with a slight shadow sticks out more than without and also that pure black does not ' +
    'look the best on a white or white-ish background, so a slightly "lighter" black is better. ',
    'http://codepen.io/_catalin/pen/YqdmMj',
    null,
    10
  ));

  allCards.push(new Card(
    'hm',
    'Visualize Data with a Heat Map',
    'http://i.imgur.com/W6uEH0U.png',
    'heat.png',
    ['React', 'jQuery', 'D3'],
    'How glad I am now that I have learned how D3 truly works while working at the previous project ' +
    'or this would have been a mess and a really stressful experience. Instead this felt like a breeze ' +
    'and everything was fitting in nicely. Not much to say except a praise towards D3 that handles big ' +
    'amounts of data with such ease. ',
    'http://codepen.io/_catalin/pen/PNVjEp',
    null,
    11
  ));

  allCards.push(new Card(
    'hm',
    'Relationships with a Force Directed Graph',
    'http://i.imgur.com/SoHPVhu.png',
    'force.png',
    ['React', 'jQuery', 'D3'],
    'This was a good project and it made you see data visualisation from a different perspective.  ' +
    'The only thing I regret is that I did not took a screen shot of the result when I finished the project. ' +
    "Shortly after, freecodecamp moved it's discussion board to reddit so the project API was no longer available. " +
    'Nonetheless the project is done, the main concept are learned and even tho there is a new project that  ' +
    'uses a different api to achieve kinda the same result, I have decided not to change my original code ' +
    'and I just adjusted it al little bit to take the data from reddit.',
    'http://codepen.io/_catalin/pen/dMrPxJ',
    null,
    23
  ));

  allCards.push(new Card(
    'hm',
    'Map Data Across the Globe',
    'http://i.imgur.com/LBsbtB9.png',
    'globe.png',
    ['React', 'jQuery', 'D3'],
    'The grand finale of the D3 challenges. It made you learn the topojson library that worked with the  ' +
    'D3 geo location function. It was big, it had big data, new notions, the globe, and area of effect circles ' +
    'but despite that, the only problem I had was rendering a world map that does not lag your PC to death. ' +
    'After some experimentation I realised that the thing that eats the most resource are actually the country ' +
    'borders, but it would not look the same without them. I would brag about the fact that my implementation ' +
    'of the "geograph" performed better (and maybe to this day still does) than the freecodecamp example. The ' +
    'thing I remember from this is that I could not make a satisfying function that will display the circles ' +
    'directly related to the asteroid mass, because it would make some be so tiny that would not render and some ' +
    'would cover whole continents so I had to compromise and the result, although a lot smoother, ' +
    'is not as impressive. The thing that I have learned while working at this project is that maybe ' +
    'browsers are not ready for this kind of renderings yet, at least not the old fashioned way using ' +
    'SVG or HTML, because with WebGL this would have been a lot smoother.',
    'http://codepen.io/_catalin/full/oxOZmY',
    null,
    5
  ));

  allCards.push(new Card(
    'tsms',
    'Timestamp Microservice',
    'http://i.imgur.com/sDKqYUE.png',
    'portfolio.png',
    ['Node'],
    'My first backend project. You can pass a string as a parameter, and it will check to see whether that string ' +
    'contains either a unix timestamp or a natural language date.  ' +
    'If it does, it returns both the Unix timestamp and the natural language form of that date. ' +
    'If it does not contain a date or Unix timestamp, it returns null for those properties. ' +
    'Example usage: https://fcc-ts-msvc.herokuapp.com/January2017,12 . ' +
    'What I would say about this is that working with dates in javascript is a mess. ' +
    'There is this great library called moment js but as far as I know the founder left the project, ' +
    'I wonder why... Anyways after I made this, I decided that this was to easy for me so I started ' +
    'Dynamic Web Application Projects, this is where the big boys where hanging and I wanted to be one of them! ',
    'https://github.com/ucshadow/fcc-timestamp-microservice',
    'https://fcc-ts-msvc.herokuapp.com/January2017,12',
    22
  ));

  allCards.push(new Card(
    'va',
    'A Voting App',
    'https://i.imgur.com/u70EtYy.png',
    'poll.png',
    ['Meteor', 'React', 'mongoDB', 'D3', 'Bootstrap'],
    'I was so excited to finally put all my knowledge to the test with this full stack app. I have started with ' +
    'node and express but the lack of experience working with big projects turned my work into a big mess. ' +
    'The real breaking point was when I had to implement user login. I have started studying passport.js ' +
    'to try and implement a log in function but with no real success, so after a day I started looking into ' +
    'alternatives. Since freecodecamp stopped asking that all Web App projects must be made using the MEAN stack ' +
    'it meant that I can pick what ever framework I wanted. My first thought was Django because of my previous ' +
    'Python knowledge, but that quickly changed when I saw what Meteor has to offer. I had some previous interaction ' +
    'with Meteor since I wanted to build a project for myself about half a year prior to this project and I was ' +
    "pleasantly surprised about the fact that Meteor fully adopted React as it's rendering engine so I was hitting " +
    'two birds with one stone. The project is pretty well organised and has plenty of functionality. The thing ' +
    'I remember was frustrating was the fact that my views were updating twice, because of the State change of the ' +
    'React Component and the auto-update function of Meteor. That was a problem I chose to fix when working on a ' +
    'later project, but that is another story. I also remember that it took a whole day to implement the fill ' +
    'percentage with color of the option row based on the total number of votes, the method I used was a separate ' +
    'div for the Text, border and actual fill. The app is not fully polished and has some minor slip ups but it ' +
    'works. It took me 9 days to finish including the one day experiments with different frameworks. Overall I am ' +
    'pleased with the result given the fact that this was way harder to make then the next two challenges.',
    'https://ucshadow-vote-app.herokuapp.com/',
    'https://github.com/ucshadow/Vote-App-FCC',
    3
  ));

  allCards.push(new Card(
    'nlca',
    'A Nightlife Coordination App',
    'http://i.imgur.com/cDWDyye.png',
    'night.png',
    ['Meteor', 'React', 'mongoDB', 'Bootstrap'],
    'Compared to the Voting App this was like a walk in the park. ' +
    'Basically pull data from the Foursquare API, and use that data locally. The only thing that I do not like ' +
    'is that every time you click that you are going, all the results get re rendered. Basically there is an  ' +
    'array of results (bars and locals that serve drinks) that are mapped to a react Component. ' +
    'Every time a user want to go to a bar, the database is updated with that user, so the database changes.  ' +
    'Now Meteor detects the change and so the array changes and it gets re rendered. It is not really ' +
    'noticeable, as React doeas a great job at rendering, but still. ' +
    'Overall an easier project.',
    'https://ucshadow-nightlife-coord-app.herokuapp.com/',
    'https://github.com/ucshadow/FCC-NCA',
    6
  ));

  allCards.push(new Card(
    'ctsm',
    'Chart the Stock Market',
    'http://i.imgur.com/sjDdLml.png',
    'stock.png',
    ['Meteor', 'React', 'mongoDB', 'Highcharts'],
    'A pretty fun project, that also required me to study some things about the Stock Market as I had no  ' +
    'idea what the result from the Yahoo Stock API was trying to say. The project uses Highcharts. At first ' +
    'I wanted to do the whole thing in D3 but quickly realised that the requirements are just to big for a D3  ' +
    'newbie to pull of, so after a quick google search I found out Highcharts has a chart type dedicated to stocks. ' +
    'The chart looks great, works great and it is easy to configure. Now you only need to know the stock name ' +
    'of the company you want to search. ',
    'https://fcc-stock-market.herokuapp.com/',
    'https://github.com/ucshadow/FCC-stockMarket',
    4
  ));

  allCards.push(new Card(
    'rhpms',
    'Request Header Parser Microservice',
    'http://i.imgur.com/6Lb7Mzu.png',
    'portfolio.png',
    ['Python'],
    'After all those projects I wanted something simpler, so I took a backend project. ' +
    'It looked so simple that I decided to build it in Python using Flask. ' +
    'It was easy to make and easy to deploy to heroku. ',
    'https://ucshadow-header-parser.herokuapp.com/',
    'https://github.com/ucshadow/FCC-header-parser/blob/master/app.py',
    12
  ));

  allCards.push(new Card(
    'mabtc',
    'Manage a Book Trading Club',
    'http://i.imgur.com/OwJhNO3.png',
    'book.png',
    ['Meteor', 'React', 'mongoDB'],
    'I must admit this was the project I had the most fun with.  ' +
    'Since I now was comfortable with both Meteor / Mongo and with React, it just all came together smoothly. ' +
    'This app has everything the challenge required and more like owner opinion that each owner can contribute to,  ' +
    'book preview and a book swap feature. I tried to add every function I could have thought of. The site uses ' +
    'no styling framework like bootstrap, it is all done "by hand". Here is where I started really looking into ' +
    'color palettes and design principles. ',
    'https://ucshadow-book-club.herokuapp.com/',
    'https://github.com/ucshadow/FCC-books',
    2
  ));

  allCards.push(new Card(
    'bapc',
    'A Pinterest Clone',
    'http://i.imgur.com/XSnb4j3.png',
    'pin.png',
    ['Meteor', 'React', 'Material UI'],
    'My last Web App project and number 1 based on looks thanx to Material UI.  ' +
    'It was uninspired named "Cards" but, well, it is a great describing name because it uses the Material UI   ' +
    'Card component. The site is designed following Material Design guides and it looks good and simple.  ' +
    'It also uses a custom made "Masonry" type grid since I did not want to include Masonry.js into my project. ' +
    'What I remember is having to implement shouldComponentUpdate because the pictures would keep re rendering ' +
    'when you voted on a post, so I had to make the vote buttons into different Components and only update ' +
    'those Components on new data. It was a great learning experience and an even greater introduction to Material ' +
    'design.',
    'https://ucshadow-book-club.herokuapp.com/',
    'https://github.com/ucshadow/FCC-books',
    1
  ));

  allCards.push(new Card(
    'qm',
    'Random Quote Machine',
    'http://i.imgur.com/f7JkVxU.png',
    'portfolio.png',
    ['React', 'Material UI'],
    'After all I have done until this point, the next projects seemed like taking kandy from a child. ' +
    'A quote generator was the first one I had to tackle. It takes quotes from an array and displays them. ' +
    'I have used Material UI because it is so easy to make simple pages like this one without getting to much  ' +
    'into design. One thing I have tried and and was successful at implementing was a check that the ' +
    'newly generated quote does not match the previously one, or the "NEW QUOTE" button would seem unresponsive. ',
    'http://codepen.io/_catalin/pen/oLBazV',
    null,
    13
  ));

  allCards.push(new Card(
    'lw',
    'Show the Local Weather',
    'http://i.imgur.com/OZpKhyC.png',
    'portfolio.png',
    ['React', 'jQuery'],
    'The local weather using openweather API. It first tries to get the user location using navigator.geolocation ' +
    "and if that fails it pings ipinfo.io for the user's IP. " +
    'It changes the background image based on he current weather condition.  ',
    'http://codepen.io/_catalin/pen/kXyrKK',
    null,
    14
  ));

  allCards.push(new Card(
    'ww',
    'Wikipedia Viewer',
    'http://i.imgur.com/Ooirxd8.png',
    'portfolio.png',
    ['React', 'jQuery', 'Material UI'],
    'A simple Wikipedia article search page. ' +
    'Done using Material UI',
    'http://codepen.io/_catalin/pen/oLWzLk',
    null,
    15
  ));

  allCards.push(new Card(
    'ttv',
    'Twitch.tv API',
    'http://i.imgur.com/batWRWU.png',
    'portfolio.png',
    ['React', 'jQuery', 'Material UI'],
    'A page that uses Twitch.tv JSON API. You can manually add streamers to check their live status ',
    'https://codepen.io/_catalin/pen/pbPVvG',
    null,
    16
  ));

  allCards.push(new Card(
    'sjc',
    'JavaScript Calculator',
    'http://i.imgur.com/boecqfV.png',
    'portfolio.png',
    ['jQuery'],
    'A simple Calculator. This is an older project of mine from a different codepen account. I just had it there ' +
    'and used this instead of writing a new one. ',
    'http://codepen.io/ucshadow/pen/VLXqOP',
    null,
    17
  ));

  allCards.push(new Card(
    'apc',
    'Pomodoro Clock',
    'http://i.imgur.com/2rd6fdn.png',
    'portfolio.png',
    ['jQuery', 'Bootstrap'],
    'A pomodoro clock. pretty unstyled, I could say that maybe I got lazy, I still kinda hate styling things ' +
    'and writing CSS in general but that was no excuse. Anyway, I wanted to leave this as I submitted it also as a ' +
    'reminder that unstyled pages do not look pretty.',
    'http://codepen.io/_catalin/pen/kXymBO',
    null,
    18
  ));

  allCards.push(new Card(
    'tttg',
    'Tic Tac Toe Game',
    'http://i.imgur.com/sGQkjTu.png',
    'portfolio.png',
    ['jQuery', 'Bootstrap'],
    'A Tic Tac Toe game with AI. It uses an implementation of the MinMax algorithm, and calculates the most ' +
    'efficient move. This project took a while as I had to study how the algorithm works, but I managed to pull ' +
    'it of in the end. It offers basic options but the challenge was not about the options.',
    'http://codepen.io/_catalin/pen/dXVARq',
    null,
    19
  ));

  allCards.push(new Card(
    'sg',
    'Simon Game',
    'http://i.imgur.com/nL8dssn.png',
    'portfolio.png',
    ['Bootstrap'],
    'A Simon game. It uses Web Audio API. It was fun and a little challenging to make this one work. ' +
    'The main problem was to make the sound as long as the mouse button was pressed. The Web Audio API looks great ' +
    'and is easy to work with once you get the basics.',
    'http://codepen.io/_catalin/pen/oLoyzx',
    null,
    20
  ));

  allCards.push(new Card(
    'rlg',
    'Rogue Like Dungeon Crawler',
    'http://i.imgur.com/CO8Bbdq.png',
    'portfolio.png',
    ['React'],
    'The last of my big projects from freecodecamp. This was as fun to build as was frustrating. ' +
    'The main challenge is to build this in React using html objects, or I would have used a library like ' +
    'Phaser or Pixi and I would have been ready in no time. From the movement of the player, the collision, the ' +
    'levelup, to the stats, weapons, life orbs, everything is a challenge. It was fun to build and fun to ' +
    'balance, I planned adding more stuff to the game but the browser was already struggling to render all the ' +
    'elements. I remember I had to adjust the tileSize (the size of every object in the game)' +
    'from 32 to 24 pixels, just to get some ' +
    'more frames from Chrome. I also remember all the cave generators algorithms that I have tried to adapt from ' +
    'the online examples until I finally decided to roll my own cave generation algorithm, with blackjack.. and.. . ' +
    'Anyways, with my own cave generator I had all the control I wanted and I just kept adding stuff. Great challenge. ' +
    'In the end is not the fastest game and definitely resource heavy, but it does what it has to. ',
    'http://codepen.io/_catalin/pen/oLoyzx',
    null,
    21
  ));

  return allCards;
}


var Card = function (id, title, picture, icon, libs, description, url, gitUrl, pos) {
  return {
    id: id,
    title: title,
    picture: picture,
    icon: icon,
    libs: libs,
    description: description,
    url: url,
    gitUrl: gitUrl,
    pos: pos
  }
};