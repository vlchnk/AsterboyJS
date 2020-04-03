function keyReleased() {
    window.onkeydown = function(e) {
        switch (e.keyCode) {
            case 37: //key LEFT
                ship.setRotation(-0.1);
                break;
            case 38: //key UP
                ship.boosting(true);
                break;
            case 39: //key RIGHT
                ship.setRotation(0.1);
                break;
            case 13: //key ENTER
                startNewGame()
                break;
        }
        e.preventDefault();
    };
    window.onkeyup = function(e) {
        switch (e.keyCode) {
            case 37: //key LEFT
                ship.setRotation(0);
                break;
            case 38: //key UP
                ship.boosting(false);
                break;
            case 39: //key RIGHT
                ship.setRotation(0);
                break;
            case 13: //key ENTER
                break;
        }
        e.preventDefault();
    };
}