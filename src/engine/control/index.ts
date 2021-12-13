import Vector from '../vector';
// import GamepadControl from './gamepad';
// import KeyboardControl from './keyboard';

// Controls system layered on top of gamepad and keyboard systems

// Interface for input objects
// export interface InputState {
//     move: Vector;
//     primaryFire: boolean;
//     alternateFire: boolean;
// }

// export const defaultInputState = (): InputState => ({
//     move: Vector.zero,
//     primaryFire: false,
//     alternateFire: false,
// });

// export default class Control {

//     keyboardControl: KeyboardControl;

//     gamepadControl: GamepadControl;

//     constructor () {

//         this.keyboardControl = new KeyboardControl();
//         this.gamepadControl = new GamepadControl();

//     }

//     getInputs (): InputState {

//         const gamepadConnected: boolean = this.gamepadControl.update();

//         // retrieve inputs from keyboard or controller
//         const result =
//         gamepadConnected &&
//         this.gamepadControl.lastInput > this.keyboardControl.lastInput
//             ? this.gamepadControl.getInputs()
//             : this.keyboardControl.getInputs();

//         // cap magnitude at 1
//         result.move = result.move.clampedMagnitude(1);

//         return result;

//     }

// }
