import {InputState, defaultInputState} from '.';

// Control System for Gamepads using HTML5 Gamepad API

export default class GamepadControl {

    lastInput: number;

    inputState: InputState;

    gamepad: Gamepad | null;

    constructor () {

        this.lastInput = 0;
        this.inputState = defaultInputState();
        this.gamepad = null;

    }

    static convert (gamepad: Gamepad): InputState {

        // Convert a Gamepad object to an InputState object
        return {
            move: {
                horizontal: gamepad.axes[0],
                vertical: gamepad.axes[1],
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

        // Figure out if inputs have changed and update lastInput and inputState
        // eslint-disable-next-line no-constant-condition
        if (previousStamp < this.gamepad.timestamp) {

            this.lastInput = Date.now();
            this.inputState = GamepadControl.convert(this.gamepad);

        }

        return true;

    }

    getInputs (): InputState {

        return this.inputState;

    }

}
