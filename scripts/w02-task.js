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
yearElement.textContent = "2023";
imageElement.setAttribute("src", profilePicture);
profilePicture.setAttribute("alt", "Profile image of {profilePicture}");

const altText = `Profile image of ${fullName}`;



/* Step 5 - Array */
const Sweets = [Icecream, Cookies]
const Savory = [Pasta, Salad, Chicken, Rice]
foodElement.innerHTML = `<p>My favorite sweets: ${Sweets.join(", ")}</p><p>My favorite savory dishes: ${Savory.join(", ")}</p>`;
const food = "Italian";
const favoriteFood = "Steak";
Sweets.push(favoriteFood);
/* Assuming you have already declared and updated the Sweets array with the new favorite food item as mentioned in the previous steps. */

// Create a string with the updated content
const updatedContent = `<p>My favorite sweets: ${Sweets.join(", ")}</p><p>My favorite savory dishes: ${Savory.join(", ")}</p>`;

// Append the updated content to the existing content in the "food" element with a line break
foodElement.innerHTML += `<br>${updatedContent}`;
Sweets.shift(); // Removes the first element from the Sweets array
// Append the modified Sweets array with a line break
foodElement.innerHTML += `<br>My favorite sweets (updated): ${Sweets.join(", ")}`;
Sweets.pop(); // Removes the last element from the Sweets array
// Append the final modified Sweets array with a line break
foodElement.innerHTML += `<br>My favorite sweets (updated): ${Sweets.join(", ")}`;
