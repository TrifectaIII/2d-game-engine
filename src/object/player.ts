import * as P5 from 'p5';

import * as Core from '../engine/core';
import * as Utility from '../engine/utility';

const MAX_HEALTH = 100;
const WIDTH = 100;
const HEIGHT = 100;

export default class Player extends Core.GameObjectRect {

    health: number;

    constructor () {

        super(Core.GAME_LENGTH / 2, Core.GAME_LENGTH / 2, HEIGHT, WIDTH);
        this.health = MAX_HEALTH;

    }

    draw (p: P5, scaleFactor: number) {

        p.push();

        p.rectMode(p.CORNERS);
        p.fill('white');
        p.stroke('black');
        p.strokeWeight(1);

        p.rect(
            Utility.roundMid(this.left / scaleFactor),
            Utility.roundMid(this.top / scaleFactor),
            Utility.roundMid(this.right / scaleFactor),
            Utility.roundMid(this.bottom / scaleFactor),
        );

        p.pop();

    }

}
