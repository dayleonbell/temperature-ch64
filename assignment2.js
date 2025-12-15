function convertToFerenheit(celsius){
    let ferenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C is ${ferenheit}°F`);
    return ferenheit;
}
let celsius= prompt("Enter temperature in Celsius:");
let ferenheit = convertToFerenheit(celsius);
document.getElementById("results").innerText = `${celsius}°C is ${ferenheit}°F`;


