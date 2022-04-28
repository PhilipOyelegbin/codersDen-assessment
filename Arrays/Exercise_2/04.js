import countries from countries.js
if (countries.include("Ethiopia")) {
		console.log("ETHIOPIA")
} else {
		countries.push("Ethiopia")
		console.log(countries)
}