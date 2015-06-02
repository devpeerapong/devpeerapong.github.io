var spritesheet = new Image();
var runnerCells = [
      { left: 0,   top: 0, width: 47, height: 64 },
      { left: 55,  top: 0, width: 44, height: 64 },
      { left: 107, top: 0, width: 39, height: 64 },
      { left: 152, top: 0, width: 46, height: 64 },
      { left: 208, top: 0, width: 49, height: 64 },
      { left: 265, top: 0, width: 46, height: 64 },
      { left: 320, top: 0, width: 42, height: 64 },
      { left: 380, top: 0, width: 35, height: 64 },
      { left: 425, top: 0, width: 35, height: 64 },
    ];

    // Behaviors.................................................

var runInPlace = {
       lastAdvance: 0,
       PAGEFLIP_INTERVAL: 100,

       execute: function (sprite, context, time) {
          if (time - this.lastAdvance > this.PAGEFLIP_INTERVAL) {
             sprite.painter.advance();
             this.lastAdvance = time;
          }
       }
    };

var moveLeftToRight = {
       lastMove: 0,
       execute: function (sprite, context, time) {
         if (this.lastMove !== 0) {
           sprite.left -= sprite.velocityX *
                          ((time - this.lastMove) / 1000); 

           if (sprite.left < 0) {
              sprite.left = canvas.width;
           }
         }
         this.lastMove = time;
       }
    };

    // Sprite....................................................

var sprite = new Sprite('runner',
                        new SpriteSheetPainter(runnerCells),
                        [ runInPlace, moveLeftToRight ]);