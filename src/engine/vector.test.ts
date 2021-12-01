import {describe, expect, test} from '@jest/globals';

import Vector from './vector';

test('Gets and sets magnitude', () => {

    const t = new Vector(1, 1);
    expect(t.magnitude).toBeCloseTo(Math.sqrt(2));
    t.magnitude = 100;
    expect(t.x).toBeCloseTo(100 / Math.sqrt(2));

});
