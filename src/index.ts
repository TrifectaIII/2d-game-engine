/* eslint-disable no-magic-numbers */
import * as P5 from 'p5';
import 'normalize.css';

import './style.css';

import * as Core from './engine/core';
import * as Utility from './engine/utility';
import {Background} from './particle/background';

const adjustCanvas = (p: P5, cnv: P5.Renderer, side: number) => {

    // resize to max possible square, don't redraw
    p.resizeCanvas(side, side, true);

    // center canvas on page
    cnv.position(
        (p.windowWidth - side) / 2,
        (p.windowHeight - side) / 2,
    );

};

const scaleGame = (p: P5, cnv: P5.Renderer) => {

    // find smaller side length of window
    const side = p.windowWidth > p.windowHeight ? p.windowHeight : p.windowWidth;

    // adjust canvas size and position
    adjustCanvas(p, cnv, side);

    // adjust font size
    p.textSize(side / 30);

    // return scale factor
    return Core.GAME_LENGTH / side;

};

const sketch = (p: P5) => {

    // store refs
    let cnv: P5.Renderer;
    let font: P5.Font;
    let scaleFactor: number;
    let background: Background;
    let other: Core.GameObject;
    let player: Core.GameObject;

    p.preload = () => {

        font = p.loadFont('/homespun.ttf');

    };

    p.setup = () => {

        // create canvas, place in div
        cnv = p.createCanvas(0, 0);
        cnv.parent('canvas-hold');

        // set font
        p.textFont(font);

        // scale game elements to window size
        scaleFactor = scaleGame(p, cnv);

        // Create background
        background = new Background();

        // Create gameobjects for testing
        other = new Core.GameObject(p.width / 2, p.height / 2, 100, 100);
        player = new Core.GameObject(p.width / 2, p.height / 2, 50, 50);

    };

    p.windowResized = () => {

        // scale game elements to window size
        scaleFactor = scaleGame(p, cnv);

    };

    p.draw = () => {

        player.position.x = p.mouseX;
        player.position.y = p.mouseY;

        p.background(255);

        background.update();
        background.draw(p, scaleFactor);

        p.fill('white');

        p.rectMode(p.CORNERS);
        p.rect(
            Utility.roundMid(other.left),
            Utility.roundMid(other.top),
            Utility.roundMid(other.right),
            Utility.roundMid(other.bottom),
        );

        if (other.collides(player)) p.fill('red');

        p.rectMode(p.CORNERS);
        p.rect(
            Utility.roundMid(player.left),
            Utility.roundMid(player.top),
            Utility.roundMid(player.right),
            Utility.roundMid(player.bottom),
        );

    };

};

// create game instance of p5
const game = new P5(sketch);
