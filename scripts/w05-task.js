/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templeList = [
    {
        templeName: "Mount Timpanogos Temple",
        imageUrl: "https://www.churchofjesuschrist.org/media/collection/mount-timpanogos-utah-temple-images?lang=eng",
        location: "American Fork, Utah",
        dedicatedDate: "1944-11-01"
    },
    {
        templeName: "Draper Temple",
        imageUrl: "https://www.churchofjesuschrist.org/media/collection/draper-utah-temple-images?lang=eng",
        location: "Draper, Utah",
        dedicatedDate: "2009-03-20"
    },
    {
        templeName: "Gilbert Temple",
        imageUrl: "https://www.churchofjesuschrist.org/media/collection/gilbert-arizona-temple-images?lang=eng",
        location: "Gilbert, Arizona",
        dedicatedDate: "2014-03-02"
    }
];

/* async displayTemples Function */
const displayTemples = (templeList) => {
    templeList.forEach((temple) => {
        const templeName = temple.templeName;
        const templeElement = document.createElement('p');
        templeElement.textContent = templeName;
        templesElement.appendChild(templeElement);
    });
};

/* async getTemples Function using fetch() */

/* reset Function */
const reset = () => {
    const templesElement = document.getElementById('temples');
    while (templesElement.firstChild) {
        templesElement.removeChild(templesElement.firstChild);
    }
};

/* sortBy Function */
const sortBy = (temples, filter) => {
    let sortedTemples;

    switch (filter) {
        case 'utah':
            sortedTemples = temples.filter(temp => temp.location.toLowerCase().includes("utah"));
            break;
        case 'notutah':
            sortedTemples = temples.filter(temp => !temp.location.toLowerCase().includes("utah"));
            break;
        case 'older':
            sortedTemples = temples.filter(temp => new Date(temp.dedicatedDate) < new Date(1950, 0, 1));
            break;
        case 'all':
            sortedTemples = temples;
            break;
        default:
            console.log('Invalid filter');
            break;
    }

    reset();
    displayTemples(sortedTemples);
};

/* Event Listener */
const sortByElement = document.getElementById('sortBy');

sortByElement.addEventListener('change', () => {
    sortBy(templeList, sortByElement.value);
});

// Initial display
displayTemples(templeList);
