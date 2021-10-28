import * as p5 from 'p5';
import 'normalize.css';

import './style.css';

import * as Engine from './engine/core';

const drawTextAtScale = (p: p5, scale: number, text: string, x: number, y: number, x2?: number, y2?: number) => {
    
    // save original size of the text
    const originalSize = p.textSize();

    // adjust based on scale
    p.textSize(originalSize*scale);

    // draw text
    p.text(text, x, y, x2, y2);

    // return to original size
    p.textSize(originalSize);

}

const adjustCanvas = (p: p5, cnv: p5.Renderer, side: number) => {
    
    // resize to max possible square, don't redraw
    p.resizeCanvas(side, side, true);

    // center canvas on page
    var x = (p.windowWidth - side) / 2;
    var y = (p.windowHeight - side) / 2;
    cnv.position(x, y);

}

const scaleGame = (p: p5, cnv: p5.Renderer) => {
    
    // find smaller side length of window
    const side = p.windowWidth > p.windowHeight ? p.windowHeight : p.windowWidth;

    // adjust canvas size and position
    adjustCanvas(p, cnv, side);

    // adjust font size
    p.textSize(side/30);

}

const sketch = (p: p5) => {

    // store refs
    let cnv: p5.Renderer;
    let font: p5.Font;

    p.preload = () => {
        font = p.loadFont('/homespun.ttf');
    }

    p.setup = () => {

        // create canvas, place in div
        cnv = p.createCanvas(0,0);
        cnv.parent('canvas-hold');

        //set font
        p.textFont(font);

        // scale game elements to window size
        scaleGame(p, cnv);

    }

    p.windowResized = () => {
        // scale game elements to window size
        scaleGame(p, cnv);
    }

    p.draw = () => {
        p.background(255);
        p.textAlign(p.CENTER, p.CENTER);

        drawTextAtScale(p, 0.5, 'Half', p.width/2, p.height/4);

        p.text('Test', p.width/2, p.height/2);
    }

}

// create game instance of p5
const game = new p5(sketch);

console.log(Engine);

let myObject = new Engine.GameObject(10,10, 50, 40);

console.log(myObject);
console.log(myObject.left);
console.log(myObject.position.direction()/Math.PI);
console.log(myObject.position.magnitude());