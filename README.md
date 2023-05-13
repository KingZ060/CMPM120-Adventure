A simple adventure game by {who?} based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: start_room, area1, area2, area3, and area4
- **2+ scenes *not* based on `AdventureScene`**: Intro, Loading_Screen, and Outro
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: The showMessage method was used to give descriptions of the named objects. (A description or a way to use it)
    - Enhancement 2: I created a backgroundColorChang method and was used to change the main screen background color.(Was default to black but in some scene I want it to be white because my background doesn't fit the IO)

Experience requirements:
- **4+ locations in the game world**: The loactions for the game are: Start_room, Area1, Area2, Area3, and Area4
- **2+ interactive objects in most scenes**: The player can move the mouse over the named object, and a message will be displayed in the UI, giving the player some hints or useful information. Then click to interact with the item.(In most of the scene, doors and some special items)
- **Many objects have `pointerover` messages**: When hovering the mouse over the named object, there will be a message related to the item in the right UI box.(All the name object have pointerover messages)
- **Many objects have `pointerdown` effects**: You can also click on objects after hovering over them. You can then get this item to use later in the game and will be displayed in the Inventory.(All the name object have pointerdown effects)
- **Some objects are themselves animated**: When you acquire a weapon, the sword will disappear after a special animation. After you open a door that requires a key, the door stays open.

Asset sources:
- prison.jpg and door.jpg are created using NightCafe[Markdown link syntax](https://creator.nightcafe.studio/my-creations).
bg.png is from pixel joint[Markdown link syntax](https://pixeljoint.com/pixelart/124274.htm).
sword.png is from [Markdown link syntax](https://huaban.com/pins/201986218).
sleep.jpg and awake.jpg are created using fotor[Markdown link syntax](https://www.fotor.com/images/create).

(For each image/audio/video asset used, describe how it was created. What tool did you use to create it? Was it based on another work? If so, how did you change it, and where can we learn more about the original work for comparison? Use [Markdown link syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links).)

Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.