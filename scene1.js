class scene1 extends Phaser.Scene {
  constructor() {
    super({key: "scene1.js"});
  }
  preload() {
    this.load.image('Roofing-sky-background.jpg', 'assets/Roofing-sky-background.jpg');
    this.load.image('platform.png', 'assets/platform.png');
    this.load.spritesheet('little-guy-jumping-improved.png', 'assets/little-guy-jumping-improved.png', {
      frameWidth: 35,
      frameHeight: 35
    });

  }

  create() {

    this.add.image(400, 300, 'Roofing-sky-background.jpg');
   /* this.add.sprite(400, 568, 'platform.png');
    this.add.spritesheet(80,  340, 'spritesheet.png'); */



      platforms = this.physics.add.staticGroup();

      platforms.create(400, 568, 'platform.png').setScale(1.5).refreshBody();

      platforms.create(800,400, 'platform.png').setScale(1.0).refreshBody();

      platforms.create(30, 295, 'platform.png').setScale(0.5).refreshBody();

      platforms.create(750, 150, 'platform.png').setScale(0.5).refreshBody();

      platforms.create(345, 200, 'platform.png').setScale(0.5).refreshBody();

      player = this.physics.add.sprite(100, 350, 'little-guy-jumping-improved.png');

      player.setBounce(0.2);
      player.setCollideWorldBounds(true);

        this.anims.create({
          key: 'left',
          frames: this.anims.generateFrameNumbers('little-guy-jumping-improved.png', {
            start: 2, end: 6
          }),
          frameRate: 20,
          repeat: -1
        });
    this.anims.create({
      key: 'turn',
      frames: [{key: 'little-guy-jumping-improved.png', frame: 1}],
      frameRate: 20
    });
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('little-guy-jumping-improved.png', {
        start: 9, end: 11
      }),
      frameRate: 20,
      repeat: -1
    });
    cursors = this.input.keyboard.createCursorKeys();
    this.physics.add.collider(player, platforms);
  }

  update() {
    if (cursors.left.isDown)
    {
      player.setVelocityX(-160);

      player.anims.play('left', true);
  }
  else if (cursors.right.isDown)
  {
    player.setVelocityX(160);

    player.anims.play('right', true);
  }
  else
  {
      player.setVelocityX(0);

      player.anims.play('turn');
  }
  if (cursors.up.isDown && player.body.touching.down)
  {
    player.setVelocityY(-330);
  }
}}
