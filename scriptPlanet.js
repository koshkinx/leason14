
// 1)Вивести список планет в вигляді карток, і зробити кнопки для фільтрування планет
// за розміром (при кліку на кнопку планети повині вивестись від більшого розміру до меншого
//    і при кліку знову від меншого до більшого) Зробити такий самий фільтр по population
//         Використати https://swapi.dev/api/planets


const url = "https://swapi.dev/api/planets/";
const planetsContainer = document.getElementById("planets-container");
const sizeSortButton = document.getElementById("size-sort");
const populationSortButton = document.getElementById("population-sort");

let planets = [];

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    planets = data.results;
    renderPlanets(planets);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function renderPlanets(planets) {
  planetsContainer.innerHTML = "";

  planets.forEach((planet) => {
    const card = document.createElement("div");
    card.className = "planet-card";

    const name = document.createElement("h3");
    name.textContent = planet.name;
    card.appendChild(name);

    const climate = document.createElement("p");
    climate.textContent = `Climate: ${planet.climate}`;
    card.appendChild(climate);

    const terrain = document.createElement("p");
    terrain.textContent = `Terrain: ${planet.terrain}`;
    card.appendChild(terrain);

    const gravity = document.createElement("p");
    gravity.textContent = `Gravity: ${planet.gravity}`;
    card.appendChild(gravity);

    const population = document.createElement("p");
    population.textContent = `Population: ${planet.population}`;
    card.appendChild(population);

    planetsContainer.appendChild(card);
  });
}

sizeSortButton.addEventListener("click", () => {
  planets.sort((a, b) => parseFloat(b.diameter) - parseFloat(a.diameter));
  renderPlanets(planets);
});

populationSortButton.addEventListener("click", () => {
  planets.sort((a, b) => parseFloat(b.population) - parseFloat(a.population));
  renderPlanets(planets);
});
