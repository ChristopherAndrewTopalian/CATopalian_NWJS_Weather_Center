// listDirDeepItemNames.js

const fs = require('fs');
const path = require('path');

function listDirDeepItemNames()
{
    let folderPath = '.'; 

    console.log('Deep scanning: ' + folderPath + '\n');

    try 
    {
        // recursive: true
        // returns a massive single array of EVERYTHING in all subfolders
        let allFiles = fs.readdirSync(folderPath, { 
            recursive: true, 
            withFileTypes: true 
        });

        //-//

        for (let i = 0; i < allFiles.length; i++)
        {
            let item = allFiles[i];

            // we only want files (ignore folder names in the list)
            if (item.isFile()) 
            {
                // construct the full path using the parent folder info
                //let fullPath = path.join(item.parentPath, item.name);

                console.log(item.name);
            }
        }
    } 
    catch (err) 
    {
        console.error('Error:', err);
    }
}

listDirDeepItemNames();

//----//

/*
Deep scanning: .

listDirDeep.js
listDirShallowWithType.js
New Rich Text Document.rtf
New Text Document.txt
New folder\in folder 1.rtf
New folder\in folder 1.txt
*/

//----//

/*
Deep scanning: .

listDirDeepItemNames.js
New Rich Text Document.rtf
New Text Document.txt
in folder 1.rtf
in folder 1.txt
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

