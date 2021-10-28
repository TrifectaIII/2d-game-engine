import * as p5 from 'p5';
import * as Engine from '../engine/core';

interface Star {
    proximity: number,
    position: Engine.Vector,
}

export class Background {
    stars: Star[];

    constructor() {
        this.stars = [];
    }

    draw(p: p5) {

    }

    next() {

        // create a new star
        this.stars.push({
            proximity: Math.random() * 9 + 1,
            position: new Engine.Vector(
                Math.random() * Engine.GAME_WIDTH,
                Engine.GAME_HEIGHT,
            ),
        } as Star);

        // update all stars
        this.stars.forEach((star: Star) => {
            star
        });

    }
}