// function onReady() {
//     var header = document.getElementsByTagName('body')[0];

//     var backgrounds = new Array(
//         'url("./img/messy-pizza.jpg")'
//       , 'url("./img/pizza-wood.jpg")'
//     );

//     var current = 0;

//     function nextBackground() {
//         current++;
//         current = current % backgrounds.length;
//         header.style.backgroundImage = backgrounds[current];
//     }
//     setInterval(nextBackground, 5000);

//     header.style.backgroundImage = backgrounds[0];
// }

var stateBtn = '';

function resetState(state) {
    // uncolor the current state
    if (stateBtn === 'pizzas') {
        document.getElementById('pizzaBtn').classList.remove('current-b');
        document.getElementById('pizzas').classList.add('hidden');
	} else if (stateBtn === 'salads') {
        document.getElementById('saladBtn').classList.remove('current-b');
        document.getElementById('salads').classList.add('hidden');
	} else if (stateBtn === 'desserts') {
        document.getElementById('dessertBtn').classList.remove('current-b');
        document.getElementById('desserts').classList.add('hidden');
	} else if (stateBtn === 'drinks') {
        document.getElementById('drinkBtn').classList.remove('current-b');
        document.getElementById('drinks').classList.add('hidden');
	}
    // color the button
	if (state === 'pizzas') {
        document.getElementById('pizzaBtn').classList.add('current-b');
        document.getElementById('pizzas').classList.remove('hidden');
	} else if (state === 'salads') {
        document.getElementById('saladBtn').classList.add('current-b');
        document.getElementById('salads').classList.remove('hidden');
	} else if (state === 'desserts') {
        document.getElementById('dessertBtn').classList.add('current-b');
        document.getElementById('desserts').classList.remove('hidden');
	} else if (state === 'drinks') {
        document.getElementById('drinkBtn').classList.add('current-b');
        document.getElementById('drinks').classList.remove('hidden');
    }
    stateBtn = state;
}

document.addEventListener("DOMContentLoaded", function(event) { 
    //do work
    resetState('pizzas');
  });
