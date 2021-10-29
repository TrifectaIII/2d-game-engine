import * as p5 from 'p5';

import * as Core from '../engine/core';
import * as Utility from '../engine/utility';

class Star {
    proximity: number;
    position: Core.Vector;

    constructor() {
        this.proximity = Math.random() * 9 + 1;
        this.position = new Core.Vector(
            Utility.rand(0, Core.GAME_WIDTH),
            Core.GAME_HEIGHT * -0.1,
        );
    }

    update() {

    }

    draw (p: p5) {

    }
}

export class Background {
    stars: Star[];

    constructor() {
        this.stars = [];
    }

    update() {

        // create a new star
        this.stars.push(new Star());

        // update all stars
        this.stars.forEach((star: Star) => {
            star.update();
        });

    }

    draw(p: p5) {

    }
}