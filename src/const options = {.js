const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0d2388da58msh334bf8b9b3f6ddcp188b84jsn9c9f16dd02fc',
        'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));