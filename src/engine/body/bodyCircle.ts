import Vector from '../vector';
import BodyRect from './bodyRect';
import {
    circleCollision,
    rectCircleCollision,
} from './collision';

// 2D circular body class
export default class BodyCircle {

    position: Vector;

    radius: number;

    get right (): number { return this.position.x + this.radius; }

    set right (value: number) { this.position.x = value - this.radius; }

    get left (): number { return this.position.x - this.radius; }

    set left (value: number) { this.position.x = value + this.radius; }

    get top (): number { return this.position.y - this.radius; }

    set top (value: number) { this.position.y = value + this.radius; }

    get bottom (): number { return this.position.y + this.radius; }

    set bottom (value: number) { this.position.y = value - this.radius; }

    constructor (x: number, y: number, radius: number) {

        this.position = new Vector(x, y);
        this.radius = radius;

    }

    collides (other: BodyRect | BodyCircle) {

        if (other instanceof BodyRect) return rectCircleCollision(other, this);
        return circleCollision(other, this);

    }

}
