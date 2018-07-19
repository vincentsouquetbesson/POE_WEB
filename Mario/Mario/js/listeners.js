




$(document).on('keyup', function (e) {
    if (e.which == 32) {
        console.log("input");
        Player.jump();
    }
    else {
        console.log("input non reco " + e.which);
    }
})