import Vector from '../vector';
import BodyRect from './bodyRect';
import BodyCircle from './bodyCircle';

// Collision functions
export const rectCollision = (a: BodyRect, b: BodyRect): boolean => (
    a.left < b.right &&
    b.left < a.right &&
    a.top < b.bottom &&
    b.top < a.bottom
);

export const circleCollision = (a: BodyCircle, b: BodyCircle): boolean => (
    Vector.distance(a.position, b.position) < a.radius + b.radius
);

// only checks to see if center of circle is in rect
export const rectCircleCollision = (rect: BodyRect, circle: BodyCircle): boolean => (
    circle.position.x > rect.left &&
    circle.position.x < rect.right &&
    circle.position.y > rect.top &&
    circle.position.y < rect.bottom
);
