// Kelvin set to 293 constant temperature.
const kelvin = 0;

// Kelvin to Celsius Conversion.
var celsius = kelvin - 273;

// Celsius to Fahrenheit Conversion.
var fahrenheit = celsius * (9/5) + 32;

// Round value of fahrenheit.
var round_fahrenheit = Math.floor(fahrenheit);
console.log("The temperature is " + round_fahrenheit + " degrees Fahrenheit.");
