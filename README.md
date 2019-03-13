# Create React App and Cordova

More info on creating this structure and common issues can be found in the [Wiki](https://github.com/sriramrudraraju/create-react-app-and-cordova/wiki/Creating-Structure-for-Create-react-app-and-Cordova)

>Note: This is a sample project. Not intended to manitain for future releases

### Installation
* Clone/ Download this Code.
* `npm install` to install the dependencies.
* This project requires **Cordova** to run Cordova commands.
* `npm install -g cordova` to install it globally.

## Adding Cordova Platforms
* `cordova platform add browser` for browser platform.
* `cordova platform add ios` for ios platform.

## Production Build
* `npm run build` creates production build for react app.
* `npm run build:cordova` creates `www` folder using react production build, which will be used for cordova builds.
* `cordova build browser` cordova creates browser build in `platforms/browser/`
* `cordova build ios` cordova creates ios build in `platforms/ios/`


## Running App
* `npm start` starts the dev server for react app.
* `cordova run browser` will run in browser. *Note: Use this only after `npm run build:cordova`*
* `cordova run ios` will run in emulator. *Note: Use this only after `npm run build:cordova`*

## Debugging for Android
* Follow this [Guide](http://geeklearning.io/apache-cordova-and-remote-debugging-on-android/)
