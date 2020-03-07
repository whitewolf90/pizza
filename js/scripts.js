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

document.addEventListener('DOMContentLoaded', function(event) {
	//do work
	resetState('pizzas');
});

// window.addEventListener('scroll', () => {
// 	console.log('Scrolled!');
// });

$(window).scroll(function() {
	if ($(this).scrollTop() > 700) {
		$('.gotopbtn').fadeIn();
	} else {
		$('.gotopbtn').fadeOut();
	}
});

$('.gotopbtn').click(function() {
	$('html, body').animate({ scrollTop: 0 }, 800);
});

$(document).ready(function(){

google.maps.event.addDomListener(window, 'load', init);
function init() {
	var mapOptions = {
		zoom: 11,
		center: new google.maps.LatLng(40.67, -73.94), // New York
		styles: [
			{
				featureType: 'all',
				elementType: 'labels.text.fill',
				stylers: [ { saturation: 36 }, { color: '#000000' }, { lightness: 40 } ]
			},
			{
				featureType: 'all',
				elementType: 'labels.text.stroke',
				stylers: [ { visibility: 'on' }, { color: '#000000' }, { lightness: 16 } ]
			},
			{ featureType: 'all', elementType: 'labels.icon', stylers: [ { visibility: 'off' } ] },
			{
				featureType: 'administrative',
				elementType: 'geometry.fill',
				stylers: [ { color: '#000000' }, { lightness: 20 } ]
			},
			{
				featureType: 'administrative',
				elementType: 'geometry.stroke',
				stylers: [ { color: '#000000' }, { lightness: 17 }, { weight: 1.2 } ]
			},
			{ featureType: 'landscape', elementType: 'geometry', stylers: [ { color: '#000000' }, { lightness: 20 } ] },
			{ featureType: 'poi', elementType: 'geometry', stylers: [ { color: '#000000' }, { lightness: 21 } ] },
			{
				featureType: 'road.highway',
				elementType: 'geometry.fill',
				stylers: [ { color: '#000000' }, { lightness: 17 } ]
			},
			{
				featureType: 'road.highway',
				elementType: 'geometry.stroke',
				stylers: [ { color: '#000000' }, { lightness: 29 }, { weight: 0.2 } ]
			},
			{
				featureType: 'road.arterial',
				elementType: 'geometry',
				stylers: [ { color: '#000000' }, { lightness: 18 } ]
			},
			{
				featureType: 'road.local',
				elementType: 'geometry',
				stylers: [ { color: '#000000' }, { lightness: 16 } ]
			},
			{ featureType: 'transit', elementType: 'geometry', stylers: [ { color: '#000000' }, { lightness: 19 } ] },
			{ featureType: 'water', elementType: 'geometry', stylers: [ { color: '#000000' }, { lightness: 17 } ] }
		]
	};

	var mapElement = document.getElementById('map');
	var map = new google.maps.Map(mapElement, mapOptions);
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(40.67, -73.94),
		map: map,
		
	});
}
});


