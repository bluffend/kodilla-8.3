// button Celsius -> Fahrenheit
button1.addEventListener('click', function () {
    temperatureC = window.prompt('Type in temperature in Celsius');
    temperatureC = temperatureC.split(",").join(".");
    
    if (isNaN(temperatureC)) {
        displayText(temperatureC + ' is not a number. Please type in a number.');
    }
    else {
        temperatureF = calculateCtoF(temperatureC);
        displayText('Temperature is ' + temperatureC + ' in Celsius. It is ' + temperatureF + ' in Fahrenheit.' + weatherConditions(temperatureC));
    }
});
// button Fahrenheit -> Celsius
button2.addEventListener('click', function () {
    temperatureF = window.prompt('Type in temperature in Fahrenheit');
    temperatureF = temperatureF.split(",").join(".");
    
    if (isNaN(temperatureF)) {
        displayText(temperatureF + ' is not a number. Please type in a number.');
    }
    else {
        temperatureC = calculateFtoC(temperatureF);
        displayText('Temperature is ' + temperatureF + ' in Fahrenheit. It is ' + temperatureC + ' in Celsius.' + weatherConditions(temperatureC));
    }
});

// function: verify if temperature input is correct, 
//           call function to calculate temperature, 
//           display calculated temperature and weather conditions
function verifyCalculateAndDisplay (temperatureIn,temperatureOut,callCalculateTempFunction,tempInName,tempOutName) {
    if (isNan(temperatureIn.split(",").join("."))) {
        displayText (temperatureIn + ' is not a number. Please type in a number.');
    }
    else {
        temperatureOut = callCalculateTempFunction(temperatureIn);
        displayText('Temperature is ' + temperatureIn + ' in' + tempInName + 
            '. It is ' + temperatureOut + ' in ' + tempOutName /* + weatherConditions(tempIn) */ );   
    }    
    
}