window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const pokemonName = params.get("name");
console.log(pokemonName);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

async function getPokemonDetails() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Pokemon not found!");
    }
    const pokemon = await response.json();

    // Set the title of the page with the name of the current Pokemon
    document.title = `${capitalizeFirstLetter(pokemon.name)} - Pokemon Details`;

    const pokemonDetailsHTML = document.createElement("div");
    pokemonDetailsHTML.innerHTML = `
    <div class="pokemon-container ${pokemon.types[0].type.name}">
    <div class="pokemon-image">
      <img src="${pokemon.sprites.other["official-artwork"].front_default}" />
      <div class="pokemon-name">${capitalizeFirstLetter(pokemon.name)}</div> 
    </div>
    <div class="pokemon-details">
      <div class="stats-container">
        <div class="stats-row">
          <div class="stat-item">
            <div class="stat-value">${pokemon.weight / 10} kg</div>
            <div class="stat-label">WEIGHT</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${pokemon.height / 10} m</div>
            <div class="stat-label">HEIGHT</div>
          </div>
        </div>
        <div class="stats-row">
          <div class="stat-item">
            <div class="stat-value">${capitalizeFirstLetter(pokemon.types[0].type.name)}</div>
            <div class="stat-label">TYPE</div>
          </div>
        </div>
        <div class="stats-row">
          <div class="stat-item">
            <div class="stat-value">${pokemon.stats[1].base_stat}</div>
            <div class="stat-label">ATTACK</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${pokemon.stats[2].base_stat}</div>
            <div class="stat-label">DEFENCE</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${pokemon.stats[5].base_stat}</div>
            <div class="stat-label">SPEED</div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;

    const pokemonDetailsContainer = document.getElementById("pokemonDetails");
    pokemonDetailsContainer.appendChild(pokemonDetailsHTML);

  } catch(error) {
    const errorMessage = document.createElement("div");
    errorMessage.innerHTML = `
      <div class="error-message">${error.message}</div>
    `;
    const pokemonDetailsContainer = document.getElementById("pokemonDetails");
    pokemonDetailsContainer.appendChild(errorMessage);
  }
}

getPokemonDetails();