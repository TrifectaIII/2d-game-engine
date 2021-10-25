import * as p5 from 'p5';

import 'normalize.css';

import './style.css';

const adjustCanvas = (p: p5, cnv: p5.Renderer) => {

    // find smaller side length of window
    const side = p.windowWidth > p.windowHeight ? p.windowHeight : p.windowWidth;
    
    // resize to square, don't redraw
    p.resizeCanvas(side, side, true);

    // center canvas on page
    var x = (p.windowWidth - side) / 2;
    var y = (p.windowHeight - side) / 2;
    cnv.position(x, y);

}

const sketch = (p: p5) => {

    // store ref to canvas object
    let cnv: p5.Renderer;

    p.setup = () => {
        // create canvas, place in div, and adjust size
        cnv = p.createCanvas(0,0);
        cnv.parent('canvas-hold');
        adjustCanvas(p, cnv);
    }

    p.windowResized = () => {
        // adjust canvas whenever window is adjusted
        adjustCanvas(p, cnv);
    }

    p.draw = () => {
        p.background(255);
    }

}

// create game instance of p5
const game = new p5(sketch);
