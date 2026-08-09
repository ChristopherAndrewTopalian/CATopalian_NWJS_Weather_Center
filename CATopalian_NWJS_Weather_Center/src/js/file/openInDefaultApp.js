// openInDefaultApp.js

//const { exec } = require('child_process');
//const path = require('path');

function openInDefaultApp(whichFolder, whichFile)
{
    let basePath = process.cwd();

    let filePath = path.join(basePath, 'src', 'media', whichFolder, whichFile);

    exec('start "" "' + filePath + '"');
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

