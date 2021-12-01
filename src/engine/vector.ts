// 2D Vector Class
export default class Vector {

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

    // returns a new identical vector object
    copy (): Vector {

        return new Vector(this.x, this.y);

    }

    // returns a version if this vector with magnitude 1 (or 0 if it started at 0)
    normalized (): Vector {

        const mag = this.magnitude;
        if (!mag) return Vector.zero;
        return this.scaled(1 / mag);

    }

    // returns a new vector scaled by the factor
    scaled (factor: number): Vector {

        return new Vector(this.x * factor, this.y * factor);

    }

    // returns this vector pointing in the oposite direction
    reversed (): Vector {

        return this.scaled(-1);

    }

    // returns this vector if it were rotated r radians
    rotated (r: number): Vector {

        const nv = this.copy();
        nv.direction += r;
        return nv;

    }

    // returns a copy vector clamped to a maximum magnitude
    clampedMagnitude (m: number): Vector {

        const current = this.magnitude;
        if (current <= m) return this.copy();
        return this.normalized().scaled(m);

    }

    // add two vectors together
    static add (a: Vector, b: Vector): Vector {

        return new Vector(a.x + b.x, a.y + b.y);

    }

    // subtract one vector from another
    static subtract (a: Vector, b: Vector): Vector {

        return Vector.add(a, b.reversed());

    }

    // distance between two vectors (as points)
    static distance (a: Vector, b: Vector): number {

        return Vector.subtract(a, b).magnitude;

    }

    // check for equality between two vectors
    static equal (a: Vector, b: Vector): boolean {

        return a.x === b.x && a.y === b.y;

    }

    // Getters for basic vectors

    static get zero (): Vector { return new Vector(0, 0); }

    static get right (): Vector { return new Vector(1, 0); }

    static get left (): Vector { return new Vector(-1, 0); }

    static get up (): Vector { return new Vector(0, -1); }

    static get down (): Vector { return new Vector(0, 1); }

}
