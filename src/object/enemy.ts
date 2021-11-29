import * as P5 from 'p5';

import * as Core from '../engine/core';

const MAX_HEALTH = 100;
const WIDTH = 100;
const HEIGHT = 100;

export default class Enemy extends Core.GameObjectRect {

    health: number;

    constructor () {

        super(Core.GAME_LENGTH / 2, 0, HEIGHT, WIDTH);
        this.health = MAX_HEALTH;

    }

    draw (p: P5, scaleFactor: number) {

        p.push();

        p.rectMode(p.CORNERS);
        p.fill('white');
        p.stroke('black');
        p.strokeWeight(1);

        p.rect(
            this.left / scaleFactor,
            this.top / scaleFactor,
            this.right / scaleFactor,
            this.bottom / scaleFactor,
        );

        p.pop();

    }

}
