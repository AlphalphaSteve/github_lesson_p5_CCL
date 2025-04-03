export class Level_01 extends Phaser.Scene {

    constructor() {
        super('Start');
    }

    preload() {
    }

    create() {
        let white = "0xffffff"
        let rectangle = this.add.rectangle(1280/2, 720/2, 10, 10, white);
        this.physics.add.existing(rectangle);
        rectangle.body.setCollideWorldBounds(true, 1, 1)
        rectangle.body.setBounce(1, 1)
        rectangle.body.setVelocity(-200, 0)
        const paddleLeft = this.add.rectangle(30, 340, 5, 50, white)
        const paddleRight = this.add.rectangle(1280-30, 340, 5, 50, white)
        const netLine = this.add.rectangle(1280/2, 0, 5, 1500, white)
        this.physics.add.existing(paddleLeft)
        this.physics.add.existing(paddleRight)
        this.physics.add.collider(paddleLeft, rectangle)
        paddleLeft.body.setBounce(1, 1)
    }
    update() {
    }
    
}
