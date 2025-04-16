export class Level_01 extends Phaser.Scene {

    constructor() {
        super('Start');
    }

    preload() {
    }

    create() {
        this.leftScore = 0
        this.rightScore = 0
        let white = "0xffffff"
        this.rectangle = this.add.rectangle(1280/2, 720/2, 10, 10, white);
        this.physics.add.existing(this.rectangle);
        this.rectangle.body.setCollideWorldBounds(true, 1, 1)
        this.rectangle.body.setBounce(1, 1)
        this.rectangle.body.setVelocity(-200, 100)
        this.paddleLeft = this.add.rectangle(30, 340, 5, 50, white)
        this.physics.add.existing(this.paddleLeft, true)
        this.physics.add.collider(this.paddleLeft, this.rectangle)
        this.paddleRight = this.add.rectangle(1280-30, 340, 5, 50, white)
        this.physics.add.existing(this.paddleRight, true)
        this.physics.add.collider(this.paddleRight, this.rectangle)
        const netLine = this.add.rectangle(1280/2, 0, 5, 1500, white)
        this.cursors = this.input.keyboard.createCursorKeys()
        this.leftScoreText = this.add.text(750, 50, this.leftScore.toString(), {
            fontFamily: "Arial",
            fontSize: 32,
            color: "#FFFFFF",
        });
        this.rightScoreText = this.add.text(500, 50, this.rightScore.toString(), {
            fontFamily: "Arial",
            fontSize: 32,
            color: "#FFFFFF",
        });             
        this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }
    update() {
        if (this.keyW.isDown) {
            this.paddleLeft.y -= 3
            this.paddleLeft.body.updateFromGameObject()
        } else if (this.keyS.isDown){
            this.paddleLeft.y += 3
            this.paddleLeft.body.updateFromGameObject()
        }
        if (this.rectangle.x <= 10){
            this.rectangle.x = 1280/2;
            this.rectangle.y = 720/2;
            this.rectangle.body.setVelocity(-200, Math.random() * 300 - 150)
            this.paddleLeft.y = this.rectangle.y;
            this.paddleLeft.body.updateFromGameObject()
            this.leftScore += 1
            console.log(this.leftScore)
            this.leftScoreText.setText(this.leftScore.toString());
        }
        if (this.rectangle.x >= 1270){
            this.rectangle.x = 1280/2;
            this.rectangle.y = 720/2;
            this.rectangle.body.setVelocity(-200, Math.random() * 300 - 150)
            this.paddleLeft.y = this.rectangle.y;
            this.paddleLeft.body.updateFromGameObject()
            this.rightScore += 1
            console.log(this.rightScore)
            this.rightScoreText.setText(this.rightScore.toString());
        }
        this.paddleRight.y = this.rectangle.y
        this.paddleRight.body.updateFromGameObject();

    }

}
