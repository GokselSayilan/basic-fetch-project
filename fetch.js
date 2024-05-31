import fetch from 'node-fetch';

const apiURL = 'https://jsonplaceholder.typicode.com/posts';

async function fetchData() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
