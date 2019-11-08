var config = {

  type:Phaser.AUTO,
  width:800,
  height:600,
  physics: {
    default:'arcade',
    arcade: {
      gravity: {y : 200}

    }
  },
  scene: [ scene1 ]
};
var player;
var platforms;
var cursors;

var game = new Phaser.Game(config);

var platforms;


