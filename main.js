import { Level_01 } from './Level_01.js';
let currentScene = Level_01
const config = {
    type: Phaser.AUTO,
    parent: 'game-container',
    width: 1280,
    height: 720,
    backgroundColor: '#000000',
    pixelArt: false,
    scene: [
        currentScene
    ],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade', 
        arcade: {
            gravity: {y: 0},
            debug: false
        }
    }
}
const game = new Phaser.Game(config);
            