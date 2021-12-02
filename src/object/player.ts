import * as P5 from 'p5';

import * as Engine from '../engine';

const MAX_HEALTH = 100;
const WIDTH = 100;
const HEIGHT = 100;

export default class Player extends Engine.Body.Rect {

    health: number;

    constructor () {

        super(Engine.GAME_LENGTH / 2, Engine.GAME_LENGTH / 2, HEIGHT, WIDTH);
        this.health = MAX_HEALTH;

    }

    draw (p: P5, scaleFactor: number) {

        p.push();

        p.rectMode(p.CORNERS);
        p.fill('white');
        p.stroke('black');
        p.strokeWeight(1);

        p.triangle(
            this.position.x / scaleFactor,
            this.top / scaleFactor,
            this.left / scaleFactor,
            this.bottom / scaleFactor,
            this.right / scaleFactor,
            this.bottom / scaleFactor,
        );

        p.pop();

    }

}
