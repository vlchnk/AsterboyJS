function Star() {
    this.pos = createVector(random(width), random(height));
    this.r = 20;
    this.vel = p5.Vector.random2D();

    this.update = function() {
        this.pos.add(this.vel);
    }

    this.render = function() {
        push();
        stroke(255);
        strokeWeight(3);
        noFill();
        translate(this.pos.x - 10, this.pos.y - 10);
        circle(10, 10, this.r)
        pop();
    }

    this.edges = function() {
        if (this.pos.x > width + this.r) {
            this.pos.x = -this.r;
        } else if (this.pos.x < -this.r) {
            this.pos.x = width + this.r;
        } else if (this.pos.y > height + this.r) {
            this.pos.y = -this.r;
        } else if (this.pos.y < -this.r) {
            this.pos.y = height + this.r;
        }
    }

    this.hits = function(ship) {
        var d = dist(this.pos.x, this.pos.y, ship.pos.x, ship.pos.y);
        if (d < ship.r + this.r) {
            return true;
        } else {
            return false;
        }
    }

    this.Explosion = function() {

    }
}