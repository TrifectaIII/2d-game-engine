// Game Engine Essentials

export class Vector {
    x: number;
    y: number;

    constructor(x?: number, y?: number) {
        this.x = x || 0;
        this.y = y || 0;
    }

    magnitude(): number {
        // return the magnitude of the vector
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    direction(): number {
        // returns the direction of the vector in radians
        return Math.atan2(this.y, this.x);
    }

    scale(factor: number): Vector {
        // returns a new vector scaled by the factor.
        return new Vector(this.x * factor, this.y * factor);
    }
}

export class GameObject {
    position: Vector;
    width: number;
    height: number;

    constructor(x: number, y: number, width: number, height: number) {
        this.position = new Vector(x,y);
        this.width = width;
        this.height = height;
    }

    get right(): number {
        return this.position.x + this.width/2;
    }
    set right(value: number) {
        this.position.x = value - this.width/2;
    }

    get left(): number {
        return this.position.x - this.width/2;
    }
    set left(value: number) {
        this.position.x = value + this.width/2;
    }

    get top(): number {
        return this.position.y + this.width/2;
    }
    set top(value: number) {
        this.position.y = value - this.width/2;
    }

    get bottom(): number {
        return this.position.y - this.width/2;
    }
    set bottom(value: number) {
        this.position.y = value + this.width/2;
    }
}