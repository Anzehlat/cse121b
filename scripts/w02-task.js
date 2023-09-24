/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Anzehla Wolfley";
let currentYear = Date();
let profilePicture = "images/ProfilePic.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.getElementById("ProfilePic");

/* Step 4 - Adding Content */
nameElement.innerHTML = "<strong>Anzehla Wolfley</strong>";
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
const altText = `Profile image of ${fullName}`;
imageElement.setAttribute('alt', altText);

/* Step 5 - Array */
const food = ["Ice cream", "Cookies", "Pasta", "Salad", "Chicken", "Rice"]
foodElement.innerHTML = `${food.join('<br>')}`;
const anotherFood = "Steak";
food.push(anotherFood);
foodElement.innerHTML += `<br>${anotherFood}`;
food.shift();
foodElement.innerHTML += `<br>${food.join('<br>')}`;
food.pop();
foodElement.innerHTML += `<br>${food.join('<br>')}`;