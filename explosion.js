function Explosion(starXY) {
    console.log("BOOM");
    this.pos = createVector(random(width), random(height));
    this.r = random(2, 10);
    this.vel = p5.Vector.random2D();

    this.update = function() {
        this.pos.add(this.vel);
    }

    this.render = function() {
        push();
        stroke(255);
        strokeWeight(3);
        translate(this.pos.x, this.pos.y);
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

}