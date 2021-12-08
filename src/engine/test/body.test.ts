/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-magic-numbers */

import {describe, expect, test} from '@jest/globals';

import {Rect, Circle} from '../body';

test('Getting and setting Rect properties', () => {

    const t = new Rect(100, 50, 10, 20);
    expect(t.right).toBeCloseTo(105);
    expect(t.left).toBeCloseTo(95);
    expect(t.top).toBeCloseTo(40);
    expect(t.bottom).toBeCloseTo(60);

    t.right = -100;
    expect(t.position.x).toBeCloseTo(-105);
    t.left = 98;
    expect(t.position.x).toBeCloseTo(103);
    t.top = -50;
    expect(t.position.y).toBeCloseTo(-40);
    t.bottom = 999;
    expect(t.position.y).toBeCloseTo(989);

});

test('Getting and setting Circle properties', () => {

    const t = new Circle(100, 10, 5);
    expect(t.right).toBeCloseTo(105);
    expect(t.left).toBeCloseTo(95);
    expect(t.top).toBeCloseTo(5);
    expect(t.bottom).toBeCloseTo(15);

    t.right = 50;
    expect(t.position.x).toBeCloseTo(45);
    t.left = 200;
    expect(t.position.x).toBeCloseTo(205);
    t.top = -300;
    expect(t.position.y).toBeCloseTo(-295);
    t.bottom = 1000;
    expect(t.position.y).toBeCloseTo(995);

});

test('Rect to rect collision', () => {

    const t1 = new Rect(100, 100, 10, 10);
    const t2 = new Rect(90, 90, 10, 10);
    expect(t1.collides(t2)).toBeFalsy();
    expect(t2.collides(t1)).toBeFalsy();
    t2.position.x = 95;
    t2.position.y = 95;
    expect(t1.collides(t2)).toBeTruthy();
    expect(t2.collides(t1)).toBeTruthy();
    t2.position.y = 110;
    expect(t1.collides(t2)).toBeFalsy();
    expect(t2.collides(t1)).toBeFalsy();

});

test('Circle to circle collision', () => {

    const t1 = new Circle(-10, 0, 5);
    const t2 = new Circle(10, 0, 15);
    expect(t1.collides(t2)).toBeFalsy();
    expect(t2.collides(t1)).toBeFalsy();
    t2.position.x = 9;
    expect(t1.collides(t2)).toBeTruthy();
    expect(t2.collides(t1)).toBeTruthy();

});

// test('Rect to circle collision', () => {

// });
