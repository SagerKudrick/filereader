const fs = require('fs');

let data = fs.readFileSync("all.json");
let parsedFile = JSON.parse(data);
let found = false;
parsedFile.forEach(element => {
    console.log(element);
    }
);

