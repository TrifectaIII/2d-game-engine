import * as p5 from 'p5';

import * as Core from '../engine/core';
import * as Utility from '../engine/utility';

export class Enemy extends Core.GameObject {

    constructor(x: number, y: number) {
        super(x, y, 100, 100);
    }

    draw (p: p5) {
        
    }
}