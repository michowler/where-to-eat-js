
//Getting a random integer between two values
// get a random integer (this is used to return a random element from an array)
function getRandomInt(min, max) {

    min = Math.ceil(min); //The smallest integer greater than or equal to the given number.
  	max = Math.floor(max); //A number representing the largest integer less than or equal to the specified number.
  	return Math.floor(Math.random() * (max - min)) + min;

}

function startRandom() {

    myVar = setInterval(showRestaurant, 300);
    return myVar;

}

function showRestaurant() {

  if (document.getElementById('message')) {
    m = document.getElementById('message');
    m.parentNode.removeChild(m);
  }

	 restaurants = ["Mc Donalds", "Nyonya Colors", "Bulgogi Brothers", "Papa Rich", "Tokyo Kitchen"];
 	 colors = ['purple', 'orange', 'pink', 'teal', 'grey'];
   random_restaurant = getRandomInt(0, restaurants.length);
   restaurant = document.getElementById("restaurant");
   restaurant.innerHTML = restaurants[random_restaurant];
   restaurant.style.color = colors[random_restaurant];

}

function getRestaurant() {
  // Use clearInterval() to stop time!
  clearInterval(myVar)

  restaurant = document.getElementById('restaurant')

   message = document.createElement('h4');
   message.setAttribute('id', 'message');
   message.innerHTML = "Okay, let's go to " + restaurant.innerHTML + "!";
      //display it after the button called get restaurant
      document.getElementsByClassName('center')[0].appendChild(message);

}

function addRestaurantListener(){

  	startBtn = document.getElementById('start-random-button');  
  	// Replace 'functionName' with the name of the function that you have written
  	startBtn.addEventListener("click", startRandom)
  	getBtn = document.getElementById('get-restaurant-button');
  	// Replace 'functionName' with the name of the function that you have written
  	getBtn.addEventListener("click", getRestaurant);

}

// wait for DOM content to load before binding an event
document.addEventListener('DOMContentLoaded', addRestaurantListener);