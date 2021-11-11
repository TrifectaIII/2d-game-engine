import * as P5 from 'p5';

import * as Core from '../engine/core';
import * as Utility from '../engine/utility';

export const MAX_HEALTH = 100;

export class Player extends Core.GameObject {

    health: number;

    constructor () {

        super(Core.GAME_LENGTH / 2, Core.GAME_LENGTH / 2, 100, 100);
        this.health = 100;

    }

    draw (p: P5) {
        // Something
    }

}
