import Vector from '../vector';

// Control System for Gamepads using HTML5 Gamepad API

export interface gamepadState {

    start: boolean;
    select: boolean;
    stick1: Vector;
    stick2: Vector;
    dpad: {
        right: boolean;
        left: boolean;
        up: boolean;
        down: boolean;
    };
    face: {
        a: boolean;
        b: boolean;
        x: boolean;
        y: boolean;
    };
    trigger: {
        rb: boolean;
        rt: number;
        lb: boolean;
        lt: number;
    }

}

// any axis values below this magnitude will be ignored
const CLAMP_RANGE = 0.01;

// export default class GamepadControl {

//     lastInput: number;

//     gamepad: Gamepad | null;

//     constructor () {

//         this.lastInput = 0;
//         this.gamepad = null;

//     }

//     update (): boolean {

//         const previousStamp = this.gamepad?.timestamp || 0;

//         // Retrieve first gamepad in array
//         [this.gamepad] = navigator.getGamepads().filter((pad) => pad !== null);

//         // Return false if no active gamepads
//         if (!this.gamepad) return false;

//         // Figure out if inputs have changed and update lastInput
//         if (previousStamp < this.gamepad.timestamp) this.lastInput = Date.now();

//         return true;

//     }

//     getInputs (): InputState {

//         // Return default values if no gamepad is connected
//         if (!this.gamepad) return defaultInputState();

//         // clamp axis values to ignore joystick drift
//         const horizontalClamp =
//             Math.abs(this.gamepad.axes[0]) > CLAMP_RANGE
//                 ? this.gamepad.axes[0]
//                 : 0;
//         const verticalClamp =
//             Math.abs(this.gamepad.axes[1]) > CLAMP_RANGE
//                 ? this.gamepad.axes[1]
//                 : 0;

//         return {
//             move: new Vector(
//                 horizontalClamp,
//                 verticalClamp,
//             ),
//             primaryFire: this.gamepad.buttons[0].pressed,
//             alternateFire: this.gamepad.buttons[1].pressed,
//         };

//     }

// }
