function append(data) {
  const ul = document.querySelector('ul');
  
  const li = document.createElement('li');
  const divName = document.createElement('div');
  const divImage = document.createElement('div');
  const img = document.createElement('img');

  divName.innerHTML = data.name;
  img.src = data.imageUrl;
  divImage.appendChild(img);

  li.appendChild(divName);
  li.appendChild(divImage);

  ul.appendChild(li);
}

function extractNameAndImage(pokemonData) {
  return {
    name: pokemonData.name,
    imageUrl: pokemonData.sprites.front_default,
  };
}

function fetchPokemon(pokemonName) {
  /*
  const promise = fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);

  promise.then((response) => {
    console.log(response);
    const promiseJSON = response.json();

    promiseJSON.then((data) => {
      // console.log(data);
      const pokemonObject = {
        name: data.name,
        imageUrl: data.sprites.front_default,
      }
      append(pokemonObject);
    });
  });
   */
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      const pokemon = extractNameAndImage(data);
      append(pokemon);
    })
    .catch((error) => console.log(error));
}

function fetchPokemonData(pokemonName) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json());
}

function requestOrederedPokemons() {
  // Promise.all recebe um array de promessas

  // Criar um array onde cada elemento é a promessa de uma requisição
  const arrayOfPromises = [
    fetchPokemonData('ditto'),
    fetchPokemonData('bulbasaur'),
    fetchPokemonData('charmander'),
    fetchPokemonData('squirtle'),
    fetchPokemonData('dratini')
  ];
  Promise.all(arrayOfPromises)
    // Podemos, a partir do array de promessas resolvidas, criar um array de objetos no formato que queremos
    .then((pokemonDataList) => {
      const arrayOfPokemonObjects = pokemonDataList.map((pokemonData) => {
        return extractNameAndImage(pokemonData);
      });
      return arrayOfPokemonObjects;
    })
    // Para cada objeto desse array, podemos fazer o append do elemento no nosso HTML
    .then((pokemonList) => {
      pokemonList.forEach((pokemon) => {
        append(pokemon);
      });
    })
    .catch((error) => console.log(error));

}

async function fetchPokemonAsynAwait() {
  const arrayOfPromises = [
    fetchPokemonData('ditto'),
    fetchPokemonData('bulbasaur'),
    fetchPokemonData('charmander'),
    fetchPokemonData('squirtle'),
    fetchPokemonData('dratini')
  ];
  try {
    const pokemonDataList = await Promise.all(arrayOfPromises);
    const arrayOfPokemonObjects = pokemonDataList.map((pokemonData) => {
      return extractNameAndImage(pokemonData);
    });
    arrayOfPokemonObjects.forEach((pokemon) => {
      append(pokemon);
    });
  } catch (error) {
    console.log(error);
  }
}

window.onload = fetchPokemonAsynAwait;
