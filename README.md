## Virtual Training App

### Requirements:
* Nodejs 8
* Angularjs 5
* Ionic 3

### Running Locally

To get the project running locally
1. Install NPM/Nodejs (see current requirements above)
1. Open a terminal
1. change directories to the application root folder (virtual-training-app)
1. Install ionic using the following command (NOTE: you may need to use 'sudo' in front of command)
  1. 'npm install -g ionic'
1. Install npm dependencies using the following command
  1. 'npm install'
1. Run the application
  1. 'ionic serve'
1. Open a brower to url 'http://localhost:8100'  (it may open automatically)

### Potential issues
here is a list of potential issues that have come up when attempting to install and running

* Developer trying to run on a node version > than nodejs 8.
  * Solution: have to downgrade unfortunately until the package.json packages are updated to the latest.
* Developer running into a node-gyp error.
  * Solution: this may be caused by many things, but it was noticed that having default 'python' command as version 3 instead of 2.7 can cause this issue.
      The work around is to run command 'npm install --python=python2.7' instead of just 'npm install'
