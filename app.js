$(document).ready(function() { 

    let cards = 16;

    const kolor = function randomColor(){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    $( document ).ready(function() {
        while (cards > 0) {
            $('.tile-container').append('<div class="tile" style="background-color: '+kolor()+';"></div>')
            cards--;
        }
    })


    
    });