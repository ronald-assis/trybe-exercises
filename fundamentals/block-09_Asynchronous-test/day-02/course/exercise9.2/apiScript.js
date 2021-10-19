const API_URL = 'https://icanhazdadjoke.com/';

const append = (data) => {
  const h2 = document. querySelector('#jokeContainer');
  
  h2.innerHTML = data.joke
}

const extractJoke = (joke) => {
  return {
    joke: joke.joke,
  }
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  }
  
  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => {
      // Poderia fazer direto tbm!
      // document.querySelector('#jokeContainer').innerHTML = data.joke
      const joke = extractJoke(data)
      append(joke)
    })

};


window.onload = () => fetchJoke();