/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
    name: "Anzehla Wolfley",
    photo: "images/ProfilePic.jpg",
    favoriteFoods: [
        'Pasta',
        'Pizza',
        'Casseroles',
        'Sushi',
        'Chocolate'
    ],
    hobbies: [
        'Golfing',
        'Painting',
        'Boating',
        'Reading',
        'Eating'
    ],
    placesLived: [
        'Utah',
        'Arizona',
    ]
};

myProfile.placesLived.push(
    {
        place: 'Highland, UT',
        length: '10 years'
    }
);
myProfile.placesLived.push(
    {
        place: 'Lehi, UT',
        length: '10 years'
    }
);
myProfile.placesLived.push(
    {
        place: 'Tempe, AZ',
        length: '18 months'
    }
);

/* Populate Profile Object with placesLive objects */
document.querySelector('#name').textContent = myProfile.name;
const imageUrl = myProfile.photo;
const imageElement = document.getElementById('photo');
imageElement.src = imageUrl;
imageElement.alt = myProfile.name;

const ulFavoriteFoods = document.getElementById('favorite-foods');
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    ulFavoriteFoods.appendChild(li);
});

const ulHobbies = document.getElementById('hobbies');
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    ulHobbies.appendChild(li);
});

const dlPlacesLived = document.getElementById('places-lived');
myProfile.placesLived.forEach(place => {
    const dtElement = document.createElement('dt');
    dtElement.textContent = place.place;
    dlPlacesLived.appendChild(dtElement);

    const ddElement = document.createElement('dd');
    ddElement.textContent = place.length;
    dlPlacesLived.appendChild(ddElement);
});


/* DOM Manipulation - Output */

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


