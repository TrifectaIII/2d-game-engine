import * as p5 from 'p5';

import * as Core from '../engine/core';
import * as Utility from '../engine/utility';

export class Enemy extends Core.GameObject {
    health: number;

    constructor() {
        super(Core.GAME_LENGTH/2, 0, 100, 100);
        this.health = 100;
    }

    draw (p: p5) {
        
    }
}