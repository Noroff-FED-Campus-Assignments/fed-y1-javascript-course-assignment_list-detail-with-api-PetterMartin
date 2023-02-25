document.addEventListener("DOMContentLoaded", function() {
  // Get all the Pokemon and display them on the main page
  getPokemon("");

  // Sort event listener
  document.querySelector("#sortOrder").addEventListener("change", function(event) {
    const order = event.target.value;
    sortPokemon(order);
    toggleSortOrder(order);
  });
});

function sortPokemon(order) {
  const pokemonList = document.querySelector(".pokemonBox");
  const pokemonElements = Array.from(pokemonList.children);

  if (order === "asc") {
    pokemonElements.sort((a, b) => {
      const pokemonNameA = a.querySelector(".details-button").textContent;
      const pokemonNameB = b.querySelector(".details-button").textContent;
      return pokemonNameA.localeCompare(pokemonNameB);
    });
  } else if (order === "desc") {
    pokemonElements.sort((a, b) => {
      const pokemonNameA = a.querySelector(".details-button").textContent;
      const pokemonNameB = b.querySelector(".details-button").textContent;
      return pokemonNameB.localeCompare(pokemonNameA);
    });
  }

  pokemonList.innerHTML = "";
  pokemonElements.forEach((element) => {
    pokemonList.appendChild(element);
  });
}

function toggleSortOrder(order) {
  const sortButton = document.querySelector("#sort");
  if (order === "asc") {
    sortButton.dataset.order = "desc";
    sortButton.textContent = "Sort Z-A";
  } else if (order === "desc") {
    sortButton.dataset.order = "asc";
    sortButton.textContent = "Sort A-Z";
  }
}

async function getPokemon(searchTerm) {
  try {
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
    pokemonBox.innerHTML = "";
    Promise.all(array).then((results) => {
      if (results.length > 0) {
        pokemonBox.append(...results);
      } else {
        pokemonBox.innerHTML = "No results found";
      }
    });
  } catch (error) {
    console.error("Error:", error);
    const pokemonBox = document.querySelector(".pokemonBox");
    pokemonBox.innerHTML = "Failed to load data";
  }
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

// Type filter event listener
document.querySelector("#pokemonType").addEventListener("change", function(event) {
  const type = event.target.value.toLowerCase();

  const pokemonBox = document.querySelector(".pokemonBox");
  pokemonBox.innerHTML = "";

  getPokemonByType(type);

  event.preventDefault();
});

async function getPokemonByType(type) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    const data = await response.json();

    const filteredResults = data.pokemon
      .filter(pokemon => pokemon.slot === 1) // only include Pokemon with type in slot 1
      .map(pokemon => pokemon.pokemon);

    let array = filteredResults.map(async (result) => {
      const res = await fetch(result.url);
      const pokemon = await res.json();
      return displayPokemon(pokemon);
    });

    const pokemonBox = document.querySelector(".pokemonBox");
    pokemonBox.innerHTML = "";

    Promise.all(array).then((results) => {
      if (results.length === 0) {
        const errorMessage = document.createElement("p");
        errorMessage.innerText = "No Pokemon found for that type.";
        pokemonBox.appendChild(errorMessage);
      } else {
        pokemonBox.append(...results);
      }
    });
  } catch (error) {
    const errorMessage = document.createElement("p");
    errorMessage.innerText = "An error occurred. Please try again later.";
    const pokemonBox = document.querySelector(".pokemonBox");
    pokemonBox.appendChild(errorMessage);
  }
}


  
  
  
  