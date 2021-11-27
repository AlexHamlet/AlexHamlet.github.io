class Character {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.max_speed = 4;
        this.max_force = .25;
        this.r = 16;

        this.targetPrevPos = createVector(0, 0);
    }

    applyForce(force) {
        this.acc.add(force);
    }

    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.max_speed)
        this.pos.add(this.vel);
        this.acc.set(0, 0);
    }

    wrapEdges() {
        if (this.pos.x > width) {
            this.pos.x = 0;
        } else if (this.pos.x < 0) {
            this.pos.x = width;
        }
        if (this.pos.y > height) {
            this.pos.y = 0;
        } else if (this.pos.y < 0) {
            this.pos.y = height;
        }
    }

    enforceEdges() {
        if (this.pos.x > width) {
            this.pos.x = width;
        } else if (this.pos.x < 0) {
            this.pos.x = 0;
        }
        if (this.pos.y > height) {
            this.pos.y = height;
        } else if (this.pos.y < 0) {
            this.pos.y = 0;
        }
    }

    show() {
        stroke(255);
        strokeWeight(2);
        fill(255);
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        triangle(-this.r, -this.r / 2, -this.r, this.r / 2, this.r, 0);
        pop();
    }

    //Stop on Target
    arrive(target) {
        let force = p5.Vector.sub(target, this.pos);
        force.setMag(target.sub(this.pos).mag());
        force.sub(this.vel);
        force.limit(this.max_force);
        return force;
    }

    //Ram Target
    seek(target) {
        let force = p5.Vector.sub(target, this.pos);
        force.setMag(this.max_speed);
        force.sub(this.vel);
        force.limit(this.max_force);
        return force;
    }

    //Predict target location
    pursue(target) {
        let targetNextPos = p5.Vector.sub(target, this.targetPrevPos).mult(p5.Vector.sub(this.pos, target).div(this.max_speed).mag()).add(target);
        this.targetPrevPos = target;
        let force = p5.Vector.sub(targetNextPos, this.pos);
        force.setMag(this.max_speed);
        force.sub(this.vel);
        force.limit(this.max_force);
        return force;
    }

    flee(target) {
        let force = p5.Vector.sub(this.pos, target);
        force.setMag(this.max_speed);
        force.sub(this.vel);
        force.limit(this.max_force);
        return force;
    }

    evade(target) {
        let targetNextPos = p5.Vector.sub(target, this.targetPrevPos).mult(p5.Vector.sub(this.pos, target).div(this.max_speed).mag()).add(target);
        this.targetPrevPos = target;
        let force = p5.Vector.sub(this.pos, targetNextPos);
        force.setMag(this.max_speed);
        force.sub(this.vel);
        force.limit(this.max_force);
        return force;
    }
}