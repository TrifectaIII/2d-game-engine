import * as p5 from 'p5';

import * as Core from '../engine/core';
import * as Utility from '../engine/utility';

export const MAX_HEALTH = 100;

export class Player extends Core.GameObject {
    health: number;

    constructor() {
        super(Core.GAME_WIDTH/2, Core.GAME_HEIGHT/2, 100, 100);
        this.health = 100;
    }

    draw (p: p5) {
        
    }
}