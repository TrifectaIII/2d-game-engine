import * as p5 from 'p5';

import * as Core from '../engine/core';
import * as Utility from '../engine/utility';

const SIZE_SCALE = 4; // Multiplicative factor for star size
const SPEED_SCALE = 15; // Multiplicative factor for star speed
const SPAWN_RATE = 0.75; // Decimal value for freqency of star spawning (0 to 1)

class Star {
    proximity: number;
    position: Core.Vector;

    constructor() {
        this.proximity = Utility.rand(0.001, 1);
        this.position = new Core.Vector(
            Utility.rand(0, Core.GAME_LENGTH),
            Core.GAME_LENGTH * -0.1,
        );
    }

    update() {
        this.position.y += this.proximity * SPEED_SCALE;
    }

    draw (p: p5, scaleFactor: number) {
        p.push();
        p.fill('black');
        p.circle(
            this.position.x / scaleFactor, 
            this.position.y / scaleFactor, 
            this.proximity * SIZE_SCALE / scaleFactor,
        );
        p.pop();
    }

    finished(): boolean {
        return this.position.y > Core.GAME_LENGTH * 1.1;
    }

}

export class Background {
    stars: Star[];

    constructor() {
        this.stars = [];
    }

    update() {

        // create a new star
        if (Utility.rand(0,1) < SPAWN_RATE) this.stars.push(new Star());

        // update all stars
        this.stars.forEach((star: Star) => {
            star.update();
        });

        // delete stars that have finished
        this.stars = this.stars.filter((star: Star) => !star.finished());

    }

    draw(p: p5, scaleFactor: number) {

        this.stars.forEach((star: Star) => star.draw(p, scaleFactor));

    }
}