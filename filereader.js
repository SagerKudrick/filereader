const fs = require('fs');
let fileTitles = [];

let data = fs.readFileSync("all.json");
let parsedFile = JSON.parse(data);

const fileparser = () =>
{
    for(i = 0; i < parsedFile.length; i++)
    {
        fileTitles[i] = parsedFile[i].title;
    }
    return fileTitles;
}

exports.titlelist = fileparser;
