// Controls system layered on top of gamepad and keyboard systems

import GamepadControl from './gamepad';
import KeyboardControl from './keyboard';

// Interface for input objects
export interface InputState {
    move: {
        right: number;
        left: number;
        up: number;
        down: number;
    }
    primaryFire: boolean;
    alternateFire: boolean;
}

export const defaultInputState = (): InputState => ({
    move: {
        right: 0,
        left: 0,
        up: 0,
        down: 0,
    },
    primaryFire: false,
    alternateFire: false,
});

export default class Control {

    keyboardControl: KeyboardControl;

    gamepadControl: GamepadControl;

    constructor () {

        this.keyboardControl = new KeyboardControl();
        this.gamepadControl = new GamepadControl();

    }

    getInputs (): InputState {

        if (
            this.gamepadControl.connected &&
            this.gamepadControl.lastInput > this.keyboardControl.lastInput
        ) return this.gamepadControl.getInputs();
        return this.keyboardControl.getInputs();

    }

}
