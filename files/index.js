const cheerio = require('cheerio');

// import html file
const fs = require("fs");
const paintingsFile = fs.readFileSync("van-gogh-paintings.html");
const paintingsString = paintingsFile.toString()
const $ = cheerio.load(paintingsString);

// parse the data
const paintingContainer = $('g-scrolling-carousel > div > div')
const paintingsNames = $('g-scrolling-carousel > div > div > div > a')
const firstPaintingName = paintingsNames[0]
console.log(paintingsNames[0].ariaLabel)

    //create an array with all the paintings
    //loop through the array and store the name, date, link and image for each painting


// return the data