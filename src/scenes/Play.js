class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        this.load.image('rocket', 'assets/rocket.png');
        this.load.image('spaceship', 'assets/spaceship.png');
        this.load.image('starfield', 'assets/starfield.png');
    }

    create() {

        // starfield background
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);

        // add rocket (p1)
        this.p1Rocket = new Rocket(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'rocket').setOrigin(0.5, 0);

        // add ship1
        this.ship1 = new Ship( this, 100, 200, 'spaceship' );

        // add ship2
        this.ship2 = new Ship( this, 300, 240, 'spaceship' );

        // add ship3
        this.ship3 = new Ship( this, 450, 300, 'spaceship' );

        // green UI background
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0, 0);

        // white borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);

        // define keys
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        this.starfield.tilePositionX -= 4;
        this.p1Rocket.update();
        this.ship1.update();
        this.ship2.update();
        this.ship3.update();

        this.checkCollision(this.p1Rocket, this.ship1);
        this.checkCollision(this.p1Rocket, this.ship2);
        this.checkCollision(this.p1Rocket, this.ship3);
    }

    checkCollision(rocket, ship) {
        if( rocket.x > ship.x && rocket.x < ship.x + ship.height && rocket.y > ship.y && rocket.y < ship.y + ship.height) {
                ship.alpha = 0;
                rocket.reset();
                ship.reset();
        }
    }
}