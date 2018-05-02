# Create React App and Cordova

Created project template using Create-react-app CLI

Added cordova's config.xml to this template

Cordova needs to to be installed globally

Modified the scripts to move build to wwww and added custom script in scripts/www.js

> Note: `www` folder should be in root folder before adding cordova platforms. `npm run build:cordova` adds `www` folder dynamically. but if trying to add platforms before building, be sure to add empty `www` folder.
