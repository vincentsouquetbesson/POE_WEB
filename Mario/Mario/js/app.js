var Player = {
    inJump : 0,
    jump: function (){
        $('#player').animate({
            bottom: '100px'
        }, function () {
            $('#player').animate({
                bottom: '15px'
            })
        })
    }
}


var Piece = {
    run: function () {
        var self = this;
        $('#piece').animate({
            left: '-10%'
        }, 2500,function () {
                $('#piece').css('left', '110%');
                self.run();
        })
    }
}

Piece.run();