// whenLoaded.js

function whenLoaded()
{
    makeInterface();

    // get local data
    get_local_data(weatherZipcode); // orlando fl

    // every 10 minutes get local data
    setInterval(function()
    {
        get_local_data(weatherZipcode); // orlando fl
    }, 10 * 60 * 1000); // every 10 minutes
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

