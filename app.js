$(document).ready(function() { 

    let cards = 16;

    // random color generator, for backs of tiles and fronts

    const kolor = function randomColor(){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    // colors for matching tiles and backs of tiles
    let backOfTile = kolor();
    let c1 = kolor();
    let c2 = kolor();
    let c3 = kolor();
    let c4 = kolor();
    let c5 = kolor();
    let c6 = kolor();
    let c7 = kolor();
    let c8 = kolor();

    // array of front of tiles

    let tiles = [c1, c1, c2, c2, c3, c3, c4, c4, c5, c5, c6, c6, c7, c7, c8, c8];

    // shuffle/randomization of front of tiles

   const shuffled = function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    shuffled(tiles);

    // back of the tiles
    //   $( document ).ready(function() {
    //     while (cards > 0) {
    //         $('.tile-container').append('<div class="tile" style="background-color: '+backOfTile+';"></div>')
    //         cards--;
    //     }
    
    // })
    // front of the tiles
      $( document ).ready(function() {
        while (cards > 0) {
            $('.tile-container').append('<div class="tile" style="background-color: '+tiles[0]+';"></div>')
            cards--;
            tiles.shift();
        }
    
    })
    });