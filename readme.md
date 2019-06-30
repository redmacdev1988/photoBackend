### Setup

After you have cloned the project, in the root directory, install the modules:

```
yarn install
```

You should then see the nodes_module folder appear with all modules installed.

### Starting the server

Then you start the server by typing:

```
yarn start
```
wait a bit while the app starts up. Then you will be able to see a list of images in the console like so:

```
$ nodemon --exec babel-node src/index.js
[nodemon] 1.19.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `babel-node src/index.js`
------ start -------
.DS_Store
backtohouse.jpg
beijing-lion-statue.jpg
beijing-palace-lion-statue.jpg
beijing-palace-walls.jpg
...
...
...
```

Your web service is now ready.

### Initializing

Open a browser and type:

```
localhost:6680
```

You should then see data for the list of all the images that are available for consumption. This data will be consumed, organized, and rendered by the 
[Photo Frontend App](https://github.com/redmacdev1988/photoFrontend).
