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

export const rectCircleCollision = (rect: BodyRect, circle: BodyCircle): boolean => {

    // corners are like circle to circle collision
    if (
        circle.collides(new BodyCircle(rect.right, rect.top, 0)) ||
        circle.collides(new BodyCircle(rect.right, rect.bottom, 0)) ||
        circle.collides(new BodyCircle(rect.left, rect.top, 0)) ||
        circle.collides(new BodyCircle(rect.left, rect.bottom, 0))
    ) return true;

    // edges are two rects
    const cPoint = new BodyRect(circle.position.x, circle.position.y, 0, 0);
    return (
        cPoint.collides(new BodyRect(
            rect.position.x,
            rect.position.y,
            rect.width + circle.radius * 2,
            rect.height,
        )) ||
        cPoint.collides(new BodyRect(
            rect.position.x,
            rect.position.y,
            rect.width,
            rect.height + circle.radius * 2,
        ))
    );

};
