const queryString = document.location.search
const params = new URLSearchParams(queryString)
const pokemonName = params.get("name")
console.log(pokemonName)

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  
async function getPokemonDetails() {
    try {
      const response = await fetch(url);
      const pokemon = await response.json();
  
      const pokemonDetailsHTML = document.createElement("div");
      pokemonDetailsHTML.innerHTML = `
        <div>
          <img src="${pokemon.sprites.other["official-artwork"].front_default}" />
        </div>
        <div class="pokemonInfo">
          <a href="details.html?name=${pokemon.name}" class="details-button" data-url="${pokemon.url}">
            ${capitalizeFirstLetter(pokemon.name)}
          </a>
          <p class="${pokemon.types[0].type.name}">${capitalizeFirstLetter(pokemon.types[0].type.name)}</p>
          <p>Attack ${pokemon.stats[2].base_stat}</p>
          <p>Defense ${pokemon.stats[3].base_stat}</p>
          <p>Speed ${pokemon.stats[5].base_stat}</p>
          <img src="${pokemon.sprites.front_default}" />
          <img src="${pokemon.sprites.back_default}" />
        </div>
      `;
  
      const pokemonDetailsContainer = document.getElementById("pokemonDetails");
      pokemonDetailsContainer.appendChild(pokemonDetailsHTML);
  
    } catch(error) {
      console.log(error)
    }
  }

getPokemonDetails() 