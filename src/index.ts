import * as P5 from 'p5';
import 'normalize.css';

import './style.css';

import * as Core from './engine/core';

import Player from './object/player';
import Enemy from './object/enemy';

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
    p.textSize(side * Core.TEXT_SIZE / 100);

    // return scale factor
    return Core.GAME_LENGTH / side;

};

const sketch = (p: P5) => {

    // store refs
    let cnv: P5.Renderer;
    let font: P5.Font;
    let scaleFactor: number;
    let background: Background;
    let enemy: Enemy;
    let player: Player;

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
        player = new Player();
        enemy = new Enemy();

    };

    p.windowResized = () => {

        // scale game elements to window size
        scaleFactor = scaleGame(p, cnv);

    };

    p.draw = () => {

        // Move player to mouse position
        player.position.x = p.mouseX * scaleFactor;
        player.position.y = p.mouseY * scaleFactor;

        p.background('white');

        background.update();
        background.draw(p, scaleFactor);

        player.draw(p, scaleFactor);
        enemy.draw(p, scaleFactor);

    };

};

// create game instance of p5
const game = new P5(sketch);
