/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Juan Betancourt';
let currentYear = '';
let profilePicture = 'images/profilePic.png';



/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById("food");
let yearElement = document.querySelector('#year');
let imageElement = document.querySelector('img');



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", "profile image of " + profilePicture);



/* Step 5 - Array */

let favoriteFood = ["Pasta with meatballs and toasted bread", "bread with coffee and milk"];
foodElement.innerHTML = `<p>${favoriteFood}</p>`;

let pizza = "pizza";
favoriteFood.push(pizza);
foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood}`;


