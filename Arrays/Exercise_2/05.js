import webTechs from web_tech.js
if(webTechs.include("Sass")) {
		console.log("Sass is a CSS preprocess")
} else {
		webTechs.push("Sass")
		console.log(webTechs)
}
