/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-magic-numbers */

import {describe, expect, test} from '@jest/globals';

import {Rect, Circle} from '../body';

// test('Getting and setting Rect properties', () => {

// });

// test('Getting and setting Circle properties', () => {

// });

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
