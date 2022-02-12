const fs = require('fs');
let fileTitles = [];


const fileparser = (file) =>
{
    let exist = fs.existsSync(file)
        if(exist === true)
            {
                let data = fs.readFileSync(file);
                let parsedFile = JSON.parse(data);
                for(i = 0; i < parsedFile.length; i++)
                {
                    fileTitles[i] = parsedFile[i].title;
                }
                return fileTitles;
            }
        else
            {
                fs.appendFileSync(file, "[]");
                fileparser(file)
            }

}

exports.filereader = fileparser;
