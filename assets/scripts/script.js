const apiKey = "1e90deddd67ef6bc392f9c32";
const baseCode = "GBP"
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCode}`;

fetch(apiURL)                        // retrieve all data from this url
    .then(function (response) {          // this gets called when the fetch function returns its data
        return response.json();         // convert the relevant part of the page to a JS object
    }).then(function (object) {          // this gets called when the conversion is complete
        console.log(object);
});