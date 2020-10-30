function Square() {
    this.pos = createVector(random(width), random(height));
    this.r = random(30, 60);
    this.vel = p5.Vector.random2D();
    this.heading = random(-10, 10);
    this.rotation = random(-0.01, 0.01);

    this.update = function() {
        this.pos.add(this.vel);
    }

    this.render = function() {
        push();
        stroke(255);
        strokeWeight(3);
        noFill();
        translate(this.pos.x, this.pos.y);
        rotate(this.heading + PI / 2);
        square(0, 0, this.r)
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
        let d = dist(this.pos.x, this.pos.y, ship.pos.x, ship.pos.y);

        if (d < ship.r + this.r) {
            console.log(d);
            return true;
        } else {
            return false;
        }
    }

    this.turn = function() {
        this.heading += this.rotation;
    }
}