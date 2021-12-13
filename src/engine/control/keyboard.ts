import Vector from '../vector';

// Control System for Keypad

// constants for control keys
// const RIGHT_KEY = 'd';
// const LEFT_KEY = 'a';
// const UP_KEY = 'w';
// const DOWN_KEY = 's';
// const PRIMARY_FIRE_KEY = ' ';
// const ALTERNATE_FIRE_KEY = 'e';

// export default class KeyboardControl {

//     lastInput: number;

//     keyStates: {
//         right: boolean,
//         left: boolean,
//         up: boolean,
//         down: boolean,
//         primary: boolean,
//         alternate: boolean,
//     };

//     constructor () {

//         this.lastInput = 0;
//         this.keyStates = {
//             right: false,
//             left: false,
//             up: false,
//             down: false,
//             primary: false,
//             alternate: false,
//         };

//         window.addEventListener('keydown', (e: KeyboardEvent) => {

//             switch (e.key) {

//             case RIGHT_KEY:
//                 this.keyStates.right = true;
//                 this.lastInput = Date.now();
//                 break;

//             case LEFT_KEY:
//                 this.keyStates.left = true;
//                 this.lastInput = Date.now();
//                 break;

//             case UP_KEY:
//                 this.keyStates.left = true;
//                 this.lastInput = Date.now();
//                 break;

//             case DOWN_KEY:
//                 this.keyStates.left = true;
//                 this.lastInput = Date.now();
//                 break;

//             case PRIMARY_FIRE_KEY:
//                 this.keyStates.left = true;
//                 this.lastInput = Date.now();
//                 break;

//             case ALTERNATE_FIRE_KEY:
//                 this.keyStates.left = true;
//                 this.lastInput = Date.now();
//                 break;

//             default:
//                 break;

//             }

//         });

//         window.addEventListener('keyup', (e: KeyboardEvent) => {

//             switch (e.key) {

//             case RIGHT_KEY:
//                 this.keyStates.right = false;
//                 this.lastInput = Date.now();
//                 break;

//             case LEFT_KEY:
//                 this.keyStates.left = false;
//                 this.lastInput = Date.now();
//                 break;

//             case UP_KEY:
//                 this.keyStates.left = false;
//                 this.lastInput = Date.now();
//                 break;

//             case DOWN_KEY:
//                 this.keyStates.left = false;
//                 this.lastInput = Date.now();
//                 break;

//             case PRIMARY_FIRE_KEY:
//                 this.keyStates.left = false;
//                 this.lastInput = Date.now();
//                 break;

//             case ALTERNATE_FIRE_KEY:
//                 this.keyStates.left = false;
//                 this.lastInput = Date.now();
//                 break;

//             default:
//                 break;

//             }

//         });

//     }

//     getInputs (): InputState {

//         return {
//             move: new Vector(
//                 Number(this.keyStates.right) - Number(this.keyStates.left),
//                 Number(this.keyStates.down) - Number(this.keyStates.up),
//             ),
//             primaryFire: this.keyStates.primary,
//             alternateFire: this.keyStates.alternate,
//         };

//     }

// }
