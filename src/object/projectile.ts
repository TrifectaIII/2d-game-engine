import * as P5 from 'p5';

import * as Core from '../engine/core';
import * as Utility from '../engine/utility';

const WIDTH = 100;
const HEIGHT = 100;

export default class Projectile extends Core.GameObject {

    constructor (x: number, y: number) {

        super(x, y, WIDTH, HEIGHT);

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
