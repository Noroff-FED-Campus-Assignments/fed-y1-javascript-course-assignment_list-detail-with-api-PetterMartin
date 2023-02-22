document.addEventListener("DOMContentLoaded", function() {
    // Get all the Pokemon and display them on the main page
    getPokemon("");
  });
  
  async function getPokemon(searchTerm) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=251`);
    const data = await response.json();
  
    const filteredResults = data.results.filter((result) => {
      const resultName = lowerCaseName(result.name);
      return resultName.includes(searchTerm);
    });
  
    let array = filteredResults.map(async (result) => {
      const res = await fetch(result.url);
      const pokemon = await res.json();
      return displayPokemon(pokemon);
    });
    const pokemonBox = document.querySelector(".pokemonBox");
    Promise.all(array).then((results) => pokemonBox.append(...results));
  }
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  function lowerCaseName(string) {
    return string.toLowerCase();
  }
  
  function displayPokemon(pokemon) {
    const pokemonElement = document.createElement("div");
  
    pokemonElement.innerHTML = `
      <div>
        <img 
          src="${pokemon.sprites.other["official-artwork"].front_default}" 
        />
      </div>
      <div class="pokemonInfo">
        <a href="details.html?name=${pokemon.name}" class="details-button" data-url="${pokemon.url}">${capitalizeFirstLetter(pokemon.name)}</a>
        <p class="${pokemon.types[0].type.name}"> ${capitalizeFirstLetter(pokemon.types[0].type.name)}</p>
        <p>Attack ${pokemon.stats[2].base_stat}</p>
        <p>Defense ${pokemon.stats[3].base_stat}</p>
        <p>Speed ${pokemon.stats[5].base_stat}</p>
        <img 
          src="${pokemon.sprites.front_default}"
        />
        <img 
          src="${pokemon.sprites.back_default}"
        />
      </div>
    `;
  
    return pokemonElement;
  }
  
  document.querySelector("#search").addEventListener("click", function(event) {
    const name = document.querySelector("#pokemonName").value;
    const pokemonName = lowerCaseName(name);
  
    const pokemonBox = document.querySelector(".pokemonBox");
    pokemonBox.innerHTML = "";
  
    getPokemon(pokemonName);
  
    event.preventDefault();
  });
  
  // Enter keypress event listener
  const inputField = document.querySelector("#pokemonName");
  const searchButton = document.querySelector("#search");
  
  inputField.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
      searchButton.click();
    }
  });
  
  
  
  