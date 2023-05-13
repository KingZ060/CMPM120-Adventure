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

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "Adventure awaits!").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('demo1'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
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
    scene: [Intro, Demo1, Demo2, Outro],
    title: "Adventure Game",
});

