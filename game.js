let gameData = {
    stone_unlock: 0,
    unlock: 0,
  };

class start_room extends AdventureScene {
    constructor() {
        super("start_room", "Prison Room");
    }
    preload(){
        this.load.path='./assets/';
        this.load.image('prisonbg', 'prison.jpg');
        this.load.image('door','door.jpg')
    }
    onEnter() {
        this.bg=this.add.image(
            560,
            540,
            'prisonbg'
        );
        this.bg.setScale(3.5);
        if (this.hasItem("book📘")) {
            let door = this.add.text(1250,700, "🚪 \nUnlocked \nDoor")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Door to the prison area1");
            })
            .on('pointerdown', () => {
                this.showMessage("*Walked over......*");
                this.gotoScene('area1');
            })
        }
        else{
            let door = this.add.text(1250,700, "🚪 \nLocked \nDoor")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("book📘")) {
                    this.showMessage("You look at the lock and see that \nyou can break it easily with your newly learned skills.");
                } else {
                    this.showMessage("This is a door with a simple lock.");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("book📘")) {
                    this.showMessage("*Click......*");
                    door.setText("🚪 \nUnlocked \ndoor");
                    setTimeout(() => {
                        this.gotoScene('area1');
                    }, 1000);
                } else {
                    this.tweens.add({
                        targets: door,
                        x: '+=' + this.s,
                        repeat: 2,
                        yoyo: true,
                        ease: 'Sine.inOut',
                        duration: 100
                    });
                }
            })
        }
        let book = this.add.text(this.w * 0.2, this.w * 0.05, "📘 skill book")
            .setFontSize(this.s * 2)
            .setInteractive()
            if (this.hasItem("book📘")) {
                book.destroy()
            } else{
                book.on('pointerover', () => {
                    this.showMessage("This is a skill book, you can learn lockpicking skills after you get it.")
                })
                .on('pointerdown', () => {
                    this.showMessage("You got the book and learned the simple lockpicking skills to pick a lock.");
                    this.gainItem('book📘');
                    this.tweens.add({
                        targets: book,
                        y: `-=${2 * this.s}`,
                        alpha: { from: 1, to: 0 },
                        duration: 500,
                        onComplete: () => book.destroy()
                    });
                })
            }
    }
}

class area1 extends AdventureScene {
    constructor() {
        super("area1", "Prison Area 1");
    }
    preload(){
        this.load.path='./assets/';
        this.load.image('bg', 'bg.png');
    }
    
    onEnter() {
        this.backgroundColorChang('#FFF');
        this.bg_big=this.add.image(
            540,
            540,
            'bg'
        );
        this.bg_big.setScale(2.5);

        let door1 = this.add.text(1250,550, "🚪 \nOpened \nDoor")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Door back to the prison cell");
            })
            .on('pointerdown', () => {
                this.showMessage("*Walked over......*");
                this.gotoScene('start_room');
            })

        let door2 = this.add.text(150,550, "🚪 \nOpened \nDoor")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Door to the prison area2");
            })
            .on('pointerdown', () => {
                this.showMessage("*Walked over......*");
                this.gotoScene('area2');
            })

        let door3 = this.add.text(400,750, "🚪 \nOpened \nDoor")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Door to the prison area3");
            })
            .on('pointerdown', () => {
                this.showMessage("*Walked over......*");
                this.gotoScene('area3');
            })

        // let rock = this.add.text(1300, 200, "🪨🪨\n🪨🪨")
        //     .setFontSize(this.s * 1)
        //     .setInteractive()
        // this.tweens.add({
        //         targets: rock,
        //         x: '+=20', // Move the text by 20 pixels to the right
        //         repeat: -1, // Repeat the animation indefinitely
        //         yoyo: true, // Play the animation in reverse as well
        //         ease: 'Sine.easeInOut', // Specify the easing function for smooth motion
        //         duration: 500, // Duration of each movement phase (500 milliseconds in this example)
        // });
    }
}

class area2 extends AdventureScene {
    constructor() {
        super("area2", "Prison Area 2");
    }
    preload(){
        this.load.path='./assets/';
        this.load.image('area2_bg', 'sword_bg.jpg');
        this.load.image('sword', 'sword.png');
    }
    
    onEnter() {
        this.backgroundColorChang('#FFF');
        this.sword_bg=this.add.image(
            700,
            540,
            'area2_bg'
        );
        this.sword_bg.setScale(2.5);

        let door1 = this.add.text(1200,550, "🚪 \nOpened \nDoor")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Door to the prison area1");
            })
            .on('pointerdown', () => {
                this.showMessage("*Walked over......*");
                this.gotoScene('area1');
            })
        let door2 = this.add.text(800,950, "🚪 \nOpened \nDoor")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Door to the prison area3");
            })
            .on('pointerdown', () => {
                this.showMessage("*Walked over......*");
                this.gotoScene('area3');
            })
        this.sword=this.add.image(
            600,
            600,
            'sword'
        );
        this.sword.setScale(1);
        this.sword.setInteractive();
        if (this.hasItem("sword🗡️")) {
            this.sword.destroy()
        } else {
            this.sword.on('pointerover', () => {
                this.showMessage("This is a sealed sword, click to get it.");
            })
            .on('pointerdown', () => {
                this.showMessage("Pickedup");
                this.gainItem('sword🗡️');
                this.sword.destroy();
            })
        }
    }
}

class area3 extends AdventureScene {
    constructor() {
        super("area3", "Prison Area 3");
        
    }
    preload(){
        this.load.path='./assets/';
        this.load.image('area3_bg', 'bg.png');
    }
    onEnter() {
        this.backgroundColorChang('#FFF');
        this.bg_big=this.add.image(
            540,
            540,
            'area3_bg'
        );
        this.bg_big.setScale(2.5);

        let key = this.add.text(this.w * 0.2, this.w * 0.15, "🔑 key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .setStyle({ color: '#FFD700' });
            if (this.hasItem("key🔑")) {
                key.destroy()
            } else{
                key.on('pointerover', () => {
                    this.showMessage("This is the key for a Locked Door.")
                    this.tweens.add({
                        targets: key,
                        x: this.s + (this.h - 2 * this.s) * Math.random(),
                        y: this.s + (this.h - 2 * this.s) * Math.random(),
                        ease: 'Sine.inOut',
                        duration: 500
                    });
                })
                .on('pointerdown', () => {
                    this.showMessage("You got the key.");
                    this.gainItem('key🔑');
                    this.tweens.add({
                        targets: key,
                        y: `-=${2 * this.s}`,
                        alpha: { from: 1, to: 0 },
                        duration: 500,
                        onComplete: () => key.destroy()
                    });
                })
            }

        let door1 = this.add.text(100,200, "🚪 \nOpened \nDoor")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Door to the prison area2");
            })
            .on('pointerdown', () => {
                this.showMessage("*Walked over......*");
                this.gotoScene('area2');
            })
        let door2 = this.add.text(1250,200, "🚪 \nOpened \nDoor")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Door to the prison area1");
            })
            .on('pointerdown', () => {
                this.showMessage("*Walked over......*");
                this.gotoScene('area1');
            })
        let door3 = this.add.text(1250,750, "🚪 \nLocked \nDoor")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Door to the prison area4, but is locked and you can't pick it!");
            })
            .on('pointerdown', () => {
                if(this.hasItem("key🔑")){
                    this.showMessage("*Click......*");
                    gameData.unlock=1
                    setTimeout(() => {
                        this.gotoScene('area4');
                    }, 1000);
                } else {
                    this.tweens.add({
                        targets: door3,
                        x: '+=' + this.s,
                        repeat: 2,
                        yoyo: true,
                        ease: 'Sine.inOut',
                        duration: 100
                    });
                }
            })
        if(gameData.unlock == 1){
            door3.setText("🚪 \nUnlocked \ndoor");
            door3.on('pointerover', () => {
                this.showMessage("Door to the prison area4(unlocked!)");

            })
        }
    }
}
class area4 extends AdventureScene {
    constructor() {
        super("area4", "Prison Area 4");
    }
    preload(){
        this.load.path='./assets/';
        this.load.image('area4_bg', 'area4_final.jpg');
        this.load.image('sleep','sleep.jpg');
        this.load.image('awake','awake.jpg')
    }
    onEnter() {
        this.backgroundColorChang('#FFF');
        this.bg_final=this.add.image(
            700,
            540,
            'area4_bg'
        );
        this.bg_final.setScale(2.5);
        let door1 = this.add.text(100,600, "🚪 \nOpened \nDoor")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Door to the prison area3");
            })
            .on('pointerdown', () => {
                this.showMessage("*Walked over......*");
                this.gotoScene('area3');
            })
        
        let monster = this.add.image(1000,500,'sleep')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("This is the sleeping monster, and the escape door is behind it.");
            })
            .on('pointerdown', () => {
                this.showMessage("*You woke it up and had a duel!!!*");
                monster.setTexture('awake');
                let flashSprite = this.add.graphics();
                flashSprite.fillStyle(0xffffff, 1);
                flashSprite.fillRect(0, 0, this.cameras.main.width, this.cameras.main.height);

                flashSprite.alpha = 1;

                this.tweens.add({
                    targets: flashSprite,
                    alpha: 0,
                    duration: 1500,
                    onComplete: () => {
                        flashSprite.destroy();
                    }
                });
                monster.disableInteractive();
                door1.disableInteractive();
                let blackSquare = this.add.graphics();
                setTimeout(() => {
                    blackSquare.fillStyle(0x000000, 1); 
                    blackSquare.fillRect(250, 250, this.cameras.main.width/2, this.cameras.main.height/2+200);
                    if(this.hasItem("sword🗡️")){
                        let win_text = this.add.text(this.cameras.main.width/4-200,this.cameras.main.height/4+200, "You fought the monster for a long time, \nbut thanks to the weapon you got from\nthe dungeon, you managed to defeat it by \ngiving it the final blow with the weapon.")
                        .setFontSize(this.s * 2)
                        let end = this.add.text(this.cameras.main.width/4+200,this.cameras.main.height/4+500, "🔲 Game Finished")
                            .setFontSize(this.s * 2)
                            .setInteractive()
                            .on('pointerover', () => {
                                this.showMessage("Game Finished, Click Me!!!");
                            })
                            .on('pointerdown', () => {
                                this.gotoScene('outro');
                            })
                    } else {
                        let lose_text = this.add.text(this.cameras.main.width/4-200,this.cameras.main.height/4+200, "You fight the monster all the time, \nbut unfortunately, \nits armor is so hard that you can't \ndo much damage. \nYou eventually exhausted and died.")
                        .setFontSize(this.s * 2)
                        let end = this.add.text(this.cameras.main.width/4+200,this.cameras.main.height/4+500, "🔲 Game Finished")
                            .setFontSize(this.s * 2)
                            .setInteractive()
                            .on('pointerover', () => {
                                this.showMessage("Game Finished, Click Me!!!");
                            })
                            .on('pointerdown', () => {
                                this.gotoScene('outro');
                            })
                    }
                }, 5000);
                
                
            })
        monster.setScale(0.25);
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    preload(){
        this.load.path='./assets/';
        this.load.image('logoi', 'logo_image.png');
    }
    create(){
        
        this.imageObject=this.add.image(
            960,
            540,
            'logoi'
        )
        this.imageObject.setScale(1);

        this.tweens.add({
            targets: this.imageObject,
            alpha: { from: 0, to: 1 },
            duration: 2000,
            ease: "linear",
            onComplete:()=>{
                let text = this.add.text(1920,300, "Game background:\nYou have been falsely accused of \npoisoning food and imprisoned, and \nyou need to find a way to escape.").setFontSize(30);
                
                this.tweens.add({
                    targets: text,
                    x: 1250,
                    duration: 2000,
                    ease: 'Power2',
                });
                setTimeout(() => {
                    this.add.text(700,800, "Click anywhere to begin.").setFontSize(40);
                    this.input.on('pointerdown', () => {
                        this.cameras.main.fade(1000, 0,0,0);
                        this.time.delayedCall(1000, () => this.scene.start('start_room'));
                    });
                }, 3000);
            },
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all! Thanks for playing").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart from the intro.").setFontSize(20);
        gameData.unlock=0;
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, start_room, area1, area2, area3, area4, Outro],
    title: "Adventure Game",
});
