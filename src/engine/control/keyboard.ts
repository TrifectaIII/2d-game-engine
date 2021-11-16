import {InputState, defaultInputState} from '.';

// Control System for Keypad

export default class KeyboardControl {

    lastInput: number;

    inputState: InputState;

    constructor () {

        this.lastInput = 0;
        this.inputState = defaultInputState();

    }

    getInputs (): InputState {

        return this.inputState;

    }

}
