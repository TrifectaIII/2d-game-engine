/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-magic-numbers */

import {describe, expect, test} from '@jest/globals';

import {Rect, Circle} from '../body';

// test('Getting and setting Rect properties', () => {

// });

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

// test('Rect to rect collision', () => {

// });

test('Circle to circle collision', () => {

    const t1 = new Circle(-10, 0, 5);
    const t2 = new Circle(10, 0, 15);
    expect(t1.collides(t2)).toBeFalsy();
    t2.position.x = 9;
    expect(t1.collides(t2)).toBeTruthy();

});

// test('Rect to circle collision', () => {

// });
