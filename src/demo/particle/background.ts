import * as P5 from 'p5';

import * as Engine from '../../engine';

// Multiplicative factor for star size
const SIZE_SCALE = 4;
// Multiplicative factor for star speed
const SPEED_SCALE = 15;
// Decimal value for freqency of star spawning (0 to 1)
const SPAWN_RATE = 0.75;

class Star {

    proximity: number;

    position: Engine.Vector;

    constructor () {

        this.proximity = Engine.Utility.rand();
        this.position = new Engine.Vector(
            Engine.Utility.rand(0, Engine.GAME_WIDTH),
            -this.proximity * SIZE_SCALE,
        );

    }

    update () {

        this.position.y += this.proximity * SPEED_SCALE;

    }

    draw (p: P5, scaleFactor: number) {

        p.push();
        p.fill('black');
        p.circle(
            this.position.x / scaleFactor,
            this.position.y / scaleFactor,
            this.proximity * SIZE_SCALE / scaleFactor,
        );
        p.pop();

    }

    finished (): boolean {

        return this.position.y > Engine.GAME_HEIGHT + this.proximity * SIZE_SCALE;

    }

}

export default class Background {

    stars: Star[];

    constructor () {

        this.stars = [];

    }

    update () {

        // create a new star
        if (Engine.Utility.rand() < SPAWN_RATE) this.stars.push(new Star());

        // update all stars
        this.stars.forEach((star: Star) => {

            star.update();

        });

        // delete stars that have finished
        this.stars = this.stars.filter((star: Star) => !star.finished());

    }

    draw (p: P5, scaleFactor: number) {

        this.stars.forEach((star: Star) => star.draw(p, scaleFactor));

    }

}
