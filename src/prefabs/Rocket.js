class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add object to existing scene
        scene.add.existing(this);
        
        // Rocket movement speed
        this.movementSpeed = 3;
        
        // Default isFiring to false
        this.isFiring = false;
    }

    update() {
        if(this.isFiring) {
            this.y -= this.movementSpeed;
            if(this.y < borderUISize*3) {
                this.reset();
            }
        } else {
            // Left & Right Movement
            if(keyLEFT.isDown) {
                this.x -= this.movementSpeed;
            } else if (keyRIGHT.isDown) {
                this.x += this.movementSpeed;
            }
            
            // If firing, set isFiring to true
            if(Phaser.Input.Keyboard.JustDown(keyF)) {
                this.isFiring = true;
            }

            // Clamp to visible area
            this.x = Phaser.Math.Clamp(this.x, borderUISize+borderPadding, game.config.width-borderUISize-borderPadding);
        }
    }

    reset() {
        this.y = game.config.height-borderUISize-borderPadding;
        this.isFiring = false;
    }
  }
