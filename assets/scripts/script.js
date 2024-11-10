document.addEventListener("DOMContentLoaded", function() {

    const apiKey = "1e90deddd67ef6bc392f9c32";

    const buttonElement = document.getElementById("button");
    buttonElement.addEventListener("click", function() {

        const baseCode = document.getElementById("currency-input-1").value;
        const targetCode = document.getElementById("currency-input-2").value;
        const amount = document.getElementById("amount").value;
        const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${baseCode}/${targetCode}/${amount}`;

        fetch(apiURL)                        // retrieve all data from this url
            .then(function (response) {          // this gets called when the fetch function returns its data
                return response.json();         // convert the relevant part of the page to a JS object
            }).then(function (object) {          // this gets called when the conversion is complete
                console.log(object);
                displayExchangeRates(object);
        });

    });

});





function displayExchangeRates(object) {

    let requestedAmount = document.getElementById("amount").value;
    let baseCode = object.base_code;
    let targetCode = object.target_code;
    let conversionRate = object.conversion_rate;
    let conversionResult = object.conversion_result;

    let requestedRates = document.getElementById("requested-rates");

    requestedRates.innerHTML = `
        <p><strong>Requested Amount:</strong> ${requestedAmount} ${baseCode}</p>
        <p><strong>Converted Amount:</strong> ${conversionResult} ${targetCode}</p>
        <p><strong>The current exchange rate from ${baseCode} to ${targetCode} is </strong> ${conversionRate}</p>
        <h5>Correct as of:</h5>
        <h5>Next Update:</h5>
        `
}