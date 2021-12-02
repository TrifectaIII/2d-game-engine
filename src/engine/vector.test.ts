import {describe, expect, test} from '@jest/globals';

import Vector from './vector';

test('Gets and sets magnitude', () => {

    const t = new Vector(1, 1);
    expect(t.magnitude).toBeCloseTo(Math.sqrt(2));
    t.magnitude = 100;
    expect(t.x).toBeCloseTo(100 / Math.sqrt(2));

});

test('Gets and sets direction', () => {

    const t = new Vector(1, 1);
    expect(t.direction).toBeCloseTo(Math.PI / 4);
    t.direction = Math.PI / 2;
    expect(t.x).toBeCloseTo(0);
    expect(t.y).toBeCloseTo(Math.sqrt(2));

});

test('Normalize a vector', () => {

    const t = new Vector(100, 100);
    const norm = t.normalized();
    expect(norm.magnitude).toBeCloseTo(1);
    expect(norm.direction).toBeCloseTo(t.direction);

});

