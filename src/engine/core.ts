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

    constructor (x = 0, y = 0) {

        this.x = x;
        this.y = y;

    }

    // magnitude of the vector
    get magnitude (): number {

        return Math.sqrt(this.x ** 2 + this.y ** 2);

    }

    set magnitude (m: number) {

        if (this.magnitude) {

            const newVector = this.normalized().scaled(m);
            this.x = newVector.x;
            this.y = newVector.y;

        }

    }

    // direction the vector is pointing, in radians
    // NaN if vector has no magnitude
    get direction (): number {

        if (!this.magnitude) return NaN;

        return Math.atan2(this.y, this.x);

    }

    set direction (r: number) {

        if (isNaN(r)) {

            this.magnitude = 0;
            return;

        }

        const m = this.magnitude;
        this.x = Math.cos(r) * m;
        this.y = Math.sin(r) * m;

    }

    normalized (): Vector {

        // returns a normalized version of this vector
        const mag = this.magnitude;
        if (!mag) return new Vector(0, 0);
        return new Vector(this.x / mag, this.y / mag);

    }

    scaled (factor: number): Vector {

        // returns a new vector scaled by the factor.
        return new Vector(this.x * factor, this.y * factor);

    }

    reversed (): Vector {

        // returns a reversed version of this vector
        return this.scaled(-1);

    }

    added (other: Vector): Vector {

        // adds a vector to this one (new object returned)
        return new Vector(this.x + other.x, this.y + other.y);

    }


    subtracted (other: Vector): Vector {

        // subtracts a vector from this one (new object returned)
        return this.added(other.reversed());

    }

    rotated (r: number): Vector {

        // returns this vector if it were rotated r radians
        const nv = new Vector(this.x, this.y);
        nv.direction += r;
        return nv;

    }

    static distance (a: Vector, b: Vector): number {

        return a.subtracted(b).magnitude;

    }

    static equal (a: Vector, b: Vector): boolean {

        return a.x === b.x && a.y === b.y;

    }

}

const rectCollision = (a: BodyRect, b: BodyRect): boolean => (
    a.left < b.right &&
    b.left < a.right &&
    a.top < b.bottom &&
    b.top < a.bottom
);

const circleCollision = (a: BodyCircle, b: BodyCircle): boolean => (
    Vector.distance(a.position, b.position) < a.radius + b.radius
);

// only checks to see if center of circle is in rect
const rectCircleCollision = (rect: BodyRect, circle: BodyCircle): boolean => (
    circle.position.x > rect.left &&
    circle.position.x < rect.right &&
    circle.position.y > rect.top &&
    circle.position.y < rect.bottom
);


// 2D rectangular body class
class BodyRect {

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

        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        if (other instanceof BodyCircle) return rectCircleCollision(this, other);
        return rectCollision(this, other);

    }

}

// 2d rectangular GameObject class
// extended from rectangular body with a draw method to implement
export abstract class GameObjectRect extends BodyRect {

    // Abstract method must be implemented by inheriting classes
    abstract draw (p: P5, scaleFactor: number): void;

}

class BodyCircle {

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

// 2d circular GameObject class
// extended from circular body with a draw method to implement
export abstract class GameObjectCircle extends BodyCircle {

    // Abstract method must be implemented by inheriting classes
    abstract draw (p: P5, scaleFactor: number): void;

}
