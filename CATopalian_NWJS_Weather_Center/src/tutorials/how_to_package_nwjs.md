**Step 1 - Get the right build**
Download the **Normal** (non-SDK) NW.js build for whatever platform you're targeting from nwjs.io/downloads. Unzip it and you'll see `nw.exe` plus a handful of companion files (`.dll` files, `nw.pak`, `icudtl.dat`, a `locales` folder, etc.). Keep all of those together; you'll need the whole folder, not just the exe.

**Step 2 - Check your project structure**
Your `package.json` needs to sit at the *root* of your app folder (not nested one level down), with a correct `"main"` field pointing at your entry HTML/JS file.

**Step 3 - Zip your app**
Select the *contents* of your app folder (package.json, your HTML/JS/CSS, assets - everything) and zip them. Important: zip the contents, not the folder itself, or package.json ends up one level too deep and NW.js won't find it.

**Step 4 - Rename the zip**
Rename that zip to `package.nw`.

**Step 5 - Merge it into the exe**
Open Command Prompt in the folder with `nw.exe` and your `package.nw`, then run:

```
copy /b nw.exe+package.nw app.exe
```

That literally glues the two files together into one binary. NW.js is built to look for appended zip data at the end of its own exe, so this isn't a hack - it's the documented way to do it.

**Step 6 - Package the whole folder**
Take that new `app.exe` and put it back with all the companion files from Step 1 (the dlls, `nw.pak`, `locales`, etc. - just swap the old `nw.exe` out for your new `app.exe`). Zip that whole folder - *that's* your distributable. The recipient just unzips it and double-clicks `app.exe`.

Optional polish:
- Swap the default NW.js icon for your own using **Resource Hacker**.
- Wrap it in an installer (Inno Setup or NSIS) if you want Start Menu shortcuts and a proper uninstaller, though it'll run fine without one.

**If you don't want to do this by hand every time**, there's an npm tool called **`nw-builder`** that automates the whole thing - it downloads the correct NW.js flavor for each OS you target, zips your app, and spits out ready-to-ship folders for Windows/Mac/Linux with one command. Worth switching to once you're bundling regularly, but the manual version above is exactly what it's doing under the hood.

---

// Dedicated to God the Father  
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026  
// https://github.com/ChristopherAndrewTopalian  
// https://github.com/ChristopherTopalian  
// https://sites.google.com/view/CollegeOfScripting

