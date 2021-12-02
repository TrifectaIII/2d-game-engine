import Vector from '../vector';
import BodyCircle from './bodyCircle';
import {
    rectCollision,
    rectCircleCollision,
} from './collision';

// 2D rectangular body class (Axis-Aligned Bounding Box)
export default class BodyRect {

    position: Vector;

    width: number;

    height: number;

    get right (): number { return this.position.x + this.width / 2; }

    set right (value: number) { this.position.x = value - this.width / 2; }

    get left (): number { return this.position.x - this.width / 2; }

    set left (value: number) { this.position.x = value + this.width / 2; }

    get top (): number { return this.position.y - this.height / 2; }

    set top (value: number) { this.position.y = value + this.height / 2; }

    get bottom (): number { return this.position.y + this.height / 2; }

    set bottom (value: number) { this.position.y = value - this.height / 2; }

    constructor (x: number, y: number, width: number, height: number) {

        this.position = new Vector(x, y);
        this.width = width;
        this.height = height;

    }

    collides (other: BodyRect | BodyCircle): boolean {

        if (other instanceof BodyCircle) return rectCircleCollision(this, other);
        return rectCollision(this, other);

    }

}
