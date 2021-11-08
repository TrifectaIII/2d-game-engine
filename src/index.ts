import * as p5 from 'p5';
import 'normalize.css';

import './style.css';

import * as Core from './engine/core';
import * as Utility from './engine/utility';
import {Background} from './particle/background';

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

    // return scale factor
    return Core.GAME_LENGTH/side;

}

const sketch = (p: p5) => {

    // store refs
    let cnv: p5.Renderer;
    let font: p5.Font;
    let scaleFactor: number;
    let background: Background;
    let other: Core.GameObject;
    let player: Core.GameObject;

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
        scaleFactor = scaleGame(p, cnv);

        // Create background
        background = new Background();

        // Create gameobjects for testing
        other = new Core.GameObject(p.width/2, p.height/2, 100, 100);
        player = new Core.GameObject(p.width/2, p.height/2, 50, 50);

    }

    p.windowResized = () => {
        // scale game elements to window size
        scaleFactor = scaleGame(p, cnv);
    }

    p.draw = () => {

        player.position.x = p.mouseX;
        player.position.y = p.mouseY;

        p.background(255);

        background.update();
        background.draw(p, scaleFactor);

        p.fill('white');

        p.rectMode(p.CORNERS);
        p.rect(
            other.left,
            other.top,
            other.right,
            other.bottom,
        );
        
        if (other.collides(player)) {
            p.fill('red');
        }
        
        p.rectMode(p.CORNERS);
        p.rect(
            Math.round(player.left)+0.5,
            Math.round(player.top)+0.5,
            Math.round(player.right)-0.5,
            Math.round(player.bottom)-0.5,
        );

    }

}

// create game instance of p5
const game = new p5(sketch);
