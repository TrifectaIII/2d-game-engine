import * as Core from '../core';
import GamepadControl from './gamepad';
import KeyboardControl from './keyboard';

// Controls system layered on top of gamepad and keyboard systems

// Interface for input objects
export interface InputState {
    move: Core.Vector,
    primaryFire: boolean;
    alternateFire: boolean;
}

export const defaultInputState = (): InputState => ({
    move: new Core.Vector(0, 0),
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

        // retrieve inputs from keyboard or controller
        const result =
        gamepadConnected &&
        this.gamepadControl.lastInput > this.keyboardControl.lastInput
            ? this.gamepadControl.getInputs()
            : this.keyboardControl.getInputs();

        // normalize movement vector if magnitude is over 1
        if (result.move.magnitude > 1) result.move = result.move.normalized();

        return result;

    }

}
