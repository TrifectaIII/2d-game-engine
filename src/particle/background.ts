import * as p5 from 'p5';

import * as Core from '../engine/core';
import * as Utility from '../engine/utility';

class Star {
    proximity: number;
    position: Core.Vector;

    constructor() {
        this.proximity = Utility.rand(1,7);
        this.position = new Core.Vector(
            Utility.rand(0, Core.GAME_WIDTH),
            Core.GAME_HEIGHT * -0.1,
        );
    }

    update() {
        this.position.y += this.proximity;
    }

    draw (p: p5) {
        p.push();
        p.fill('black');
        p.circle(this.position.x, this.position.y, this.proximity);
        p.pop();
    }

    finished(): boolean {
        return this.position.y > Core.GAME_HEIGHT * 1.1;
    }

}

export class Background {
    stars: Star[];

    constructor() {
        this.stars = [];
    }

    update() {

        // create a new star
        if (Utility.rand(0,1) < 0.3) this.stars.push(new Star());

        // update all stars
        this.stars.forEach((star: Star) => {
            star.update();
        });

        // delete stars that have finished
        this.stars = this.stars.filter((star: Star) => !star.finished());

    }

    draw(p: p5) {

        this.stars.forEach((star: Star) => star.draw(p));

    }
}