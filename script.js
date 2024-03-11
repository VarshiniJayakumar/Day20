// app.js
const fetchData = async () => {
    try {
        const response = await fetch('https://api.publicapis.org/random');
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const displayData = (data) => {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = `
        <h2>${data.entries[0].API}</h2>
        <p>${data.entries[0].Description}</p>
        <a href="${data.entries[0].Link}" target="_blank">Visit API</a>
    `;
};

fetchData();