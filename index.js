const randomizer = require('./lib/randomizer');
const jokesLib = require('./lib/jokes');

const app = {};

app.config = {
  'timeBetweenJokes': 1000
};

// function that prints a random joke
app.printAJoke = function() {
    const allJokes = jokesLib.allJokes();

    const numberOfJokes = allJokes.length;

    const randomNumber = randomizer.getRandomNumber(1,numberOfJokes);

    const selectedJoke = allJokes[randomNumber - 1];

    console.log(selectedJoke);
}

// TODO: write a function that calls printJoke infinitely
app.infiniteLoop = function() {
  setInterval(app.printAJoke,app.config.timeBetweenJokes);
}

// and finally invoke the loop
app.infiniteLoop();
