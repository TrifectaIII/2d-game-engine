import * as p5 from 'p5';

import './style.css';

const sketch = (p: p5) => {

    p.setup = () => {
        p.createCanvas(100,100);
    }

    p.draw = () => {
        p.background(0);
    }

}

const game = new p5(sketch);

