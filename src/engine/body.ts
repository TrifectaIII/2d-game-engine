import Vector from './vector';

// Body classes for objects to inherit


// Collision functions
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


// 2D rectangular body class (Axis-Aligned Bounding Box)
export class BodyRect {

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

// 2D circular body class
export class BodyCircle {

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
