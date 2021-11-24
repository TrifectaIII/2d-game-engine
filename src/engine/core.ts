import * as P5 from 'p5';

// Game Engine Essentials

// Game Constants

// Length of game space in both horizontal and vertical directions
export const GAME_LENGTH = 1000;

// Scale for default text size
export const TEXT_SIZE = 5;

// 2D Vector Class
export class Vector {

    x: number;

    y: number;

    constructor (x?: number, y?: number) {

        this.x = x || 0;
        this.y = y || 0;

    }

    get magnitude (): number {

        // return the magnitude of the vector
        return Math.sqrt(this.x ** 2 + this.y ** 2);

    }

    get direction (): number {

        // returns the direction of the vector in radians
        return Math.atan2(this.y, this.x);

    }

    normalize (): Vector {

        // returns a normalized version of this vector
        const mag = this.magnitude;
        if (!mag) return new Vector(0, 0);
        return new Vector(this.x / mag, this.y / mag);

    }

    scale (factor: number): Vector {

        // returns a new vector scaled by the factor.
        return new Vector(this.x * factor, this.y * factor);

    }

    reverse (): Vector {

        // returns a reversed version of this vector
        return this.scale(-1);

    }

    add (other: Vector): Vector {

        // returns a new vector equal to this vector added to another vector
        // combine with reverse method to subtract
        return new Vector(this.x + other.x, this.y + other.y);

    }

}

// 2D abstract class with position, AABB, collision and draw
export abstract class GameObject {

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

    collides (other: GameObject): boolean {

        return (
            this.left < other.right &&
            other.left < this.right &&
            this.top < other.bottom &&
            other.top < this.bottom
        );

    }

    // Abstract method must be implemented by inheriting classes
    abstract draw (p: P5, scaleFactor: number): void;

}
