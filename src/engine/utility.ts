// Utility Functions

export const rand = (a: number, b: number): number => {

    // Returns a random float f such that a <= f < b
    if (a < b) return a + (b - a) * Math.random();
    return b + (a - b) * Math.random();


};

export const randInt = (a: number, b: number): number => {

    // Returns a random int i such that a <= i <= b
    if (a < b) return Math.floor(a + (b - a + 1) * Math.random());
    return Math.floor(b + (a - b + 1) * Math.random());

};

export const roundMid = (n: number): number => {

    // Round to nearest midpoint between integers
    // 0 becomes 0.5
    const negative: number = n < 0 ? -1 : 1;
    return (Math.round(n * negative - 0.5) + 0.5) * negative;

};
