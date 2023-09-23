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
imageElement.setAttribute('src', profilePicture);
const altText = `Profile image of ${fullName}`;
imageElement.setAttribute('alt', altText);



/* Step 5 - Array */
let favFoods = [Icecream, Cookies, Pasta, Salad, Chicken, Rice];
let favoriteFood = "Steak";
favoriteFood.push(favFoods);

// Append the updated content to the existing content in the "food" element with a line break
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift(); // Removes the first element from the Sweets array
// Append the modified Sweets array with a line break
foodElement.innerHTML += `<br>My favorite foods (updated): ${favFoods.join(", ")}`;
favFoods.pop(); // Removes the last element from the Sweets array
// Append the final modified Sweets array with a line break
foodElement.innerHTML += `<br>My favorite foods (updated): ${favFoods.join(", ")}`;
