/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-magic-numbers */

import {describe, expect, test} from '@jest/globals';

import Vector from '../vector';

test('Gets and sets magnitude', () => {

    const t = new Vector(1, 1);
    const dir = t.direction;
    expect(t.magnitude).toBeCloseTo(Math.sqrt(2));
    t.magnitude = 100;
    expect(t.x).toBeCloseTo(100 / Math.sqrt(2));
    expect(t.y).toBeCloseTo(100 / Math.sqrt(2));
    expect(t.direction).toBeCloseTo(dir);
    t.magnitude = 0;
    expect(t.x).toBeCloseTo(0);
    expect(t.y).toBeCloseTo(0);
    expect(t.direction).toBeNaN();


});

test('Gets and sets direction', () => {

    const t = new Vector(1, 1);
    expect(t.direction).toBeCloseTo(Math.PI / 4);
    t.direction = Math.PI / 2;
    expect(t.x).toBeCloseTo(0);
    expect(t.y).toBeCloseTo(Math.sqrt(2));
    t.direction = NaN;
    expect(t.x).toBeCloseTo(0);
    expect(t.y).toBeCloseTo(0);

});

test('Copies a vector to a new object', () => {

    const t = new Vector(5, 7);
    const copied = t.copy();
    copied.x = 10;
    expect(t.x).toBeCloseTo(5);
    expect(copied.x).toBeCloseTo(10);
    expect(copied.y).toBeCloseTo(t.y);

});

test('Normalize a vector', () => {

    const t = new Vector(100, 100);
    const norm = t.normalized();
    expect(norm.magnitude).toBeCloseTo(1);
    expect(norm.direction).toBeCloseTo(t.direction);
    const z = Vector.zero;
    const normz = z.normalized();
    expect(normz.magnitude).toBeCloseTo(0);
    expect(normz.direction).toBeNaN();

});

test('Scale a vector', () => {

    const t = new Vector(1, 1);
    const scaleUp = t.scaled(100);
    expect(scaleUp.magnitude).toBeCloseTo(t.magnitude * 100);
    expect(scaleUp.direction).toBeCloseTo(t.direction);
    const scaleDown = t.scaled(0.5);
    expect(scaleDown.magnitude).toBeCloseTo(t.magnitude * 0.5);
    expect(scaleDown.direction).toBeCloseTo(t.direction);
    const scaleNeg = t.scaled(-100);
    expect(scaleNeg.magnitude).toBeCloseTo(t.magnitude * 100);
    expect(scaleNeg.direction).toBeCloseTo(t.direction - Math.PI);

});

test('Reverse a vector', () => {

    const t = new Vector(10, 10);
    const rev = t.reversed();
    expect(rev.x).toBeCloseTo(-t.x);
    expect(rev.y).toBeCloseTo(-t.y);
    expect(rev.magnitude).toBeCloseTo(t.magnitude);
    expect(rev.direction).toBeCloseTo(t.direction - Math.PI);

});

test('Rotate a vector', () => {

    const t = new Vector(1, 0);
    const rot = t.rotated(Math.PI / 2);
    expect(rot.x).toBeCloseTo(0);
    expect(rot.y).toBeCloseTo(1);
    expect(rot.direction).toBeCloseTo(t.direction + Math.PI / 2);
    expect(rot.magnitude).toBeCloseTo(t.magnitude);

});

test('Clamp the magnitude of a vector', () => {

    const t = new Vector(10, 10);
    const clamped = t.clampedMagnitude(1);
    expect(clamped.magnitude).toBeCloseTo(1);
    expect(clamped.direction).toBeCloseTo(t.direction);
    const clampedHigh = t.clampedMagnitude(100);
    expect(clampedHigh.magnitude).toBeCloseTo(t.magnitude);
    expect(clampedHigh.direction).toBeCloseTo(t.direction);

});

test('Add two vectors', () => {

    const t1 = new Vector(100, 50);
    const t2 = new Vector(15, 200);
    const added = Vector.add(t1, t2);
    expect(added.x).toBeCloseTo(115);
    expect(added.y).toBeCloseTo(250);

});

test('Subtract two vectors', () => {

    const t1 = new Vector(100, 50);
    const t2 = new Vector(15, 200);
    const sub = Vector.subtract(t1, t2);
    expect(sub.x).toBeCloseTo(85);
    expect(sub.y).toBeCloseTo(-150);

});

test('Distance between two vectors', () => {

    const t1 = new Vector(0, 50);
    const t2 = new Vector(0, -50);
    const dis = Vector.distance(t1, t2);
    expect(dis).toBeCloseTo(100);

});

test('Equality of two vectors', () => {

    const t1 = new Vector(100, 100);
    const t2 = t1.copy();
    expect(Vector.equal(t1, t2)).toBe(true);
    t2.x = 10;
    expect(Vector.equal(t1, t2)).toBe(false);

});
