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
    let conversionResult = object.conversion_result.toFixed(2);

    const timeStampLast = object.time_last_update_unix;
    const dateTimeLast = new Date(timeStampLast * 1000);
    // console.log(timeStamp);
    // console.log(dateTime);

    const timeStampUpdate = object.time_next_update_unix;
    const dateTimeUpdate = new Date(timeStampUpdate * 1000);

    // if I wanted day of the week as below
    // const dayOfWeek = dateTime.toLocaleDateString("en-GB", { weekday: 'long' });
    // console.log(dayOfWeek);

    let requestedRates = document.getElementById("requested-rates");

    requestedRates.innerHTML = `
        <p><strong>Requested Amount:</strong> ${requestedAmount} ${baseCode}</p>
        <p><strong>Converted Amount:</strong> ${conversionResult} ${targetCode}</p>
        <p><strong>The current exchange rate from ${baseCode} to ${targetCode} is </strong> ${conversionRate}</p>
        <p><strong>Correct as of:</strong> ${dateTimeLast}</p>
        <p><small><strong>Next updated:</strong> ${dateTimeUpdate}</small></p>
        `
}