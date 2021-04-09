class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);

      // add object to existing scene
      scene.add.existing(this);
      
      this.moveSpeed = 2;
    }

    update() {
        // TODO: only move if not firing
        // TODO: clamp to visible area
        if(keyLEFT.isDown) {
            this.x -= this.moveSpeed;
        } else if (keyRIGHT.isDown) {
            this.x += this.moveSpeed;
        }
    }
  }
