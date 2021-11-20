import {InputState, defaultInputState} from '.';

// Control System for Gamepads using HTML5 Gamepad API

const CLAMP_RANGE = 0.01;

export default class GamepadControl {

    lastInput: number;

    inputState: InputState;

    gamepad: Gamepad | null;

    constructor () {

        this.lastInput = 0;
        this.inputState = defaultInputState();
        this.gamepad = null;

    }

    static convert (gamepad: Gamepad | null): InputState {

        if (!gamepad) return defaultInputState();

        const horizontalClamp =
            Math.abs(gamepad.axes[0]) > CLAMP_RANGE
                ? gamepad.axes[0]
                : 0;

        const verticalClamp =
            Math.abs(gamepad.axes[1]) > CLAMP_RANGE
                ? gamepad.axes[1]
                : 0;

        // Convert a Gamepad object to an InputState object
        return {
            move: {
                horizontal: horizontalClamp,
                vertical: verticalClamp,
            },
            primaryFire: gamepad.buttons[0].pressed,
            alternateFire: gamepad.buttons[1].pressed,
        };

    }

    update (): boolean {

        const previousStamp = this.gamepad?.timestamp || 0;

        // Retrieve first gamepad in array
        [this.gamepad] = navigator.getGamepads().filter((pad) => pad !== null);

        // Return false if no active gamepads
        if (!this.gamepad) return false;

        // Figure out if inputs have changed and update lastInput
        if (previousStamp < this.gamepad.timestamp) this.lastInput = Date.now();

        return true;

    }

    getInputs (): InputState {

        return GamepadControl.convert(this.gamepad);

    }

}
