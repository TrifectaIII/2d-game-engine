import * as P5 from 'p5';

import * as Engine from '../../engine';
import Player from './player';
import Enemy from './enemy';

const RADIUS = 10;

export default class Projectile extends Engine.Body.Circle {

    origin: Player | Enemy;

    constructor (x: number, y: number, origin: Player | Enemy) {

        super(x, y, RADIUS);
        this.origin = origin;

    }

    draw (p: P5, scaleFactor: number) {

        p.push();

        p.rectMode(p.CORNERS);
        p.fill('white');
        p.stroke('black');
        p.strokeWeight(1);

        p.circle(
            this.position.x / scaleFactor,
            this.position.y / scaleFactor,
            (RADIUS * 2) / scaleFactor,
        );

        p.pop();

    }

}
