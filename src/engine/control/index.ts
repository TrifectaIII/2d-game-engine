// Controls system layered on top of gamepad and keyboard systems

import GamepadControl from './gamepad';
import KeyboardControl from './keyboard';

// Interface for input objects
export interface InputState {
    move: {
        horizontal: number,
        vertical: number,
    }
    primaryFire: boolean;
    alternateFire: boolean;
}

export const defaultInputState = (): InputState => ({
    move: {
        horizontal: 0,
        vertical: 0,
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

        const gamepadConnected: boolean = this.gamepadControl.update();

        if (
            gamepadConnected &&
            this.gamepadControl.lastInput > this.keyboardControl.lastInput
        ) return this.gamepadControl.getInputs();
        return this.keyboardControl.getInputs();

    }

}
