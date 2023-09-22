/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Anzehla Wolfley";
let currentYear = "";
let profilePicture = "images/ProfilePic.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.getElementById("images/ProfilePic.jpg");

/* Step 4 - Adding Content */
nameElement.innerHTML = "<strong>Anzehla Wolfley</strong>";
yearElement.textContent = "{currentYear}";
imageElement.setAttribute("src", profilePicture);
profilePicture.setAttribute("alt", "Profile image of {profilePicture}");

const altText = `Profile image of ${fullName}`;



/* Step 5 - Array */
const Sweets = [Icecream, Cookies]
const Savory = [Pasta, Salad, Chicken, Rice]
foodElement.innerHTML = "<p>My favorite sweets: ${Sweets.join(", ")}</p><p>My favorite savory dishes: ${Savory.join(", ")}</p>";
const favoriteFood = "Italian";
Sweets.push(favoriteFood);
foodElement.innerHTML += "<br>My favorite sweets: ${Sweets.join(", ")}<br>My favorite savory dishes: ${Savory.join(", ")}";
Sweets.shift();
foodElement.innerHTML += "<br>My favorite sweets: ${Sweets.join(", ")}";
Sweets.pop();
foodElement.innerHTML += "<br>My favorite sweets (updated): ${Sweets.join(", ")}";