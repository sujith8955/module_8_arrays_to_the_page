const GEOGRAPHY_LIST = [
    {
        country: 'United States',
        capital: 'Washington',
        largestCity: 'New York',
        subdivisionName: 'state',
        subdivisions: [
            {
                name: 'Louisiana',
                capital: 'Baton Rouge',
                largestCity: 'New Orleans',
                area: 134264,
            },
            {
                name: 'California',
                capital: 'Sacramento',
                largestCity: 'Los Angeles',
                area: 423970,
            },
            {
                name: 'Nevada',
                capital: 'Carson City',
                largestCity: 'Las Vegas',
                area: 286382,
            },
        ],
    },
    {
        country: 'Guatemala',
        capital: 'Guatemala City',
        largestCity: 'Guatemala City',
        subdivisionName: 'department',
        subdivisions: [
            {
                name: 'Huehuetenango',
                capital: 'Huehuetenango',
                largestCity: 'Huehuetenango',
                area: 7403,
            },
            {
                name: 'Izabal',
                capital: 'Puerto Barrios',
                largestCity: 'Puerto Barrios',
                area: 9038,
            },
            {
                name: 'El Progreso',
                capital: 'Guastatoya',
                largestCity: 'Guastatoya',
                area: 1922,
            },
        ],
    },
    {
        country: 'Australia',
        capital: 'Canberra',
        largestCity: 'Sydney',
        subdivisionName: 'state',
        subdivisions: [
            {
                name: 'New South Wales',
                capital: 'Sydney',
                largestCity: 'Sydney',
                area: 9444,
            },
            {
                name: 'Victoria',
                capital: 'Melbourne',
                largestCity: 'Melbourne',
                area: 7416,
            },
            {
                name: 'Queensland',
                capital: 'Brisbane',
                largestCity: 'Brisbane',
                area: 5976,
            },
        ],
    },
    {
        country: 'Switzerland',
        capital: 'Bern',
        largestCity: 'Zurich',
        subdivisionName: 'canton',
        subdivisions: [
            {
                name: 'Zurich',
                capital: 'Zurich',
                largestCity: 'Zurich',
                area: 1729,
            },
            {
                name: 'Geneva',
                capital: 'Geneva',
                largestCity: 'Geneva',
                area: 282,
            },
            {
                name: 'Vaud',
                capital: 'Lausanne',
                largestCity: 'Lausanne',
                area: 3212,
            },
        ],
    },
    {
        country: 'India',
        capital: 'New Delhi',
        largestCity: 'Mumbai',
        subdivisionName: 'state',
        subdivisions: [
            {
                name: 'Telangana',
                capital: 'Hyderabad',
                largestCity: 'Hyderabad',
                area: 37713,
            },
            {
                name: 'Andhra Pradesh',
                capital: 'Vijayawada',
                largestCity: 'Visakhapatnma',
                area: 43290,
            },
            {
                name: 'Karnataka',
                capital: 'Bengaluru',
                largestCity: 'Bangalore',
                area: 54163,
            },
        ],
    },
    {
        country: 'New Zealand',
        capital: 'Wellington',
        largestCity: 'Auckland',
        subdivisionName: 'region',
        subdivisions: [
            {
                name: 'Auckland',
                capital: 'Auckland',
                largestCity: 'Auckland',
                area: 4959,
            },
            {
                name: 'Wellington',
                capital: 'Wellington',
                largestCity: 'Wellington',
                area: 862,
            },
            {
                name: 'Canterbury',
                capital: 'Christchurch',
                largestCity: 'Christchurch',
                area: 4453,
            },
        ],
    },
    {
        country: 'Dubai',
        capital: 'Dubai',
        largestCity: 'Dubai',
        subdivisionName: 'emirate',
        subdivisions: [
            {
                name: 'Dubai',
                capital: 'Dubai',
                largestCity: 'Dubai',
                area: 4114,
            }
        ],
    },
    {
        country: 'South Africa',
        capital: 'Pretoria',
        largestCity: 'Johannesburg',
        subdivisionName: 'province',
        subdivisions: [
            {
                name: 'Gauteng',
                capital: 'Johannesburg',
                largestCity: 'Johannesburg',
                area: 18178,
            },
            {
                name: 'Western Cape',
                capital: 'Cape Town',
                largestCity: 'Cape Town',
                area: 129462,
            },
            {
                name: 'KwaZulu-Natal',
                capital: 'Pietermaritzburg',
                largestCity: 'Durban',
                area: 94361,
            },
        ],
    }
];


// Convert data into HTML
const mainContent = document.querySelector('main');

const listContainer = document.createElement('div');
listContainer.classList.add('geography-list');

GEOGRAPHY_LIST.forEach(countryData => {
    const countryElement = document.createElement('div');
    countryElement.classList.add('country');

    const countryHeader = document.createElement('h2');
    countryHeader.textContent = countryData.country;
    countryElement.appendChild(countryHeader);

    const detailsList = document.createElement('ul');
    detailsList.classList.add('details');

    const capitalItem = document.createElement('li');
    capitalItem.textContent = `Capital: ${countryData.capital}`;
    detailsList.appendChild(capitalItem);

    const largestCityItem = document.createElement('li');
    largestCityItem.textContent = `Largest City: ${countryData.largestCity}`;
    detailsList.appendChild(largestCityItem);

    const subdivisionsTitle = document.createElement('h3');
    subdivisionsTitle.textContent = `Subdivisions (${countryData.subdivisionName}s)`;
    detailsList.appendChild(subdivisionsTitle);

    const subdivisionsList = document.createElement('ul');
    subdivisionsList.classList.add('subdivisions');

    countryData.subdivisions.forEach(subdivision => {
        const subdivisionItem = document.createElement('li');
        subdivisionItem.textContent = `${subdivision.name} - Capital: ${subdivision.capital}, Largest City: ${subdivision.largestCity}, Area: ${subdivision.area} sq km`;
        subdivisionsList.appendChild(subdivisionItem);
    });

    detailsList.appendChild(subdivisionsList);
    countryElement.appendChild(detailsList);
    listContainer.appendChild(countryElement);
});

mainContent.appendChild(listContainer);
