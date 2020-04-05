let places = ['Geneva, Switzerland', 'Tokyo, Japan', 'Amalfi Coast, Italy', 'Reykjavik, Iceland', 'Patagonia Region, South America', 'Tazmania, Australia', 'Queensland, New Zealand', 'Paris, France', 'Nice, France', 'Oslo, Norway'];
const button = document.getElementById('button');
const answer = document.getElementById('answer');

//"simple" way - not as accurate
// function sorting() {
//     places.sort( function(a, b) {
//         return 0.5 - Math.random();
//     });
// }

//more accurate way
function sorting() {
    for (i = places.length -1; i > 0; i--) {
        j = Math.floor(Math.random() * i)
        k = places[i]
        places[i] = places[j]
        places[j] = k
      }
}

function addText() {
    answer.innerHTML = places[0];
}

button.addEventListener('click', sorting);
button.addEventListener('click', addText);
