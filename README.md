# Melle's Videogame Room

This is project was built as part of a hackathon where I had to built a full-stack application with a new technology in two days. This is the front-end, the most interesting part because here I used react-konva to use the canvas element to built games for my son Melle. Check out [this](https://github.com/gijsmaas82/graduation-server) repository if you are interested in the backend. 

Check out this [link](https://competent-wiles-1fe4cc.netlify.com/games) to see a deployed version of the games


### Features

* React-konva and canvas
* Homepage
* Apple picking
* Coloring

### React-konva and canvas

Canvas is a html-element that lets you interact with your screen on another level. React-konva is a library that lets you use the canvas within React. It lets you do animation and make elements draggable on the screen and is a great way to experiment with new UI-design. 

### Homepage

On the homepage you can drag the baby-avatar to the apple and the pencil. This lets the canvas know which game you want to play. The main user is my son who is now 1 and a half and he understands it! After you drop the baby at the right spot you're directed to the game you chose.

### Apple picking

This game randomly generates apples on the screen and a basket to put them in. After you collected all the apples by dragging them to the basket you are rewarded with a video.

### Coloring

This game lets you color a coloring plate. You can change the colors by pressing the colored buttons on the side. It stores all the coordinates of all the touches a user made on the screen with the correct color in local state. If you click on the save button it makes a DataUrl that is saved in local state but can also be saved in the backend.
