const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
// Fetch returns a promsie 
// then blob returns another promise that we use the json method on because we know it's a json type
fetch(endpoint)
.then(blob => blob.json())
.then(data => cities.push(...data)); // use a spread to set the 0th level array item to the data
// console.log(cities);

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // determine if city or state matches search query
    const needle = new RegExp(wordToMatch, 'gi'); // global, case-insensitive
    return place.city.match(needle) || place.state.match(needle);
  })
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// findMatches('bos', cities)
function displayMatches() {
  const matchArray = findMatches(this.value, cities)
  const html = matchArray.map(place => { // map returns an array
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `<li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${numberWithCommas(place.population)}</span>
    </li>`;
  }).join("")
  suggestions.innerHTML = html;
  console.log(html)
}
// Get your data first!
const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)