export default class Tanks {
    direction = 0;
    x = 150;
    y = 150;
    animationFrame = 1;
    frames = [
        [0 * 32, 0 * 32, 32, 32],
        [1 * 32, 0 * 32, 32, 32],
        [6 * 32, 0 * 32, 32, 32],
        [7 * 32, 0 * 32, 32, 32],
        [4 * 32, 0 * 32, 32, 32],
        [5 * 32, 0 * 32, 32, 32],
        [2 * 32, 0 * 32, 32, 32],
        [3 * 32, 0 * 32, 32, 32],
    ]

    get sprite () {
        return this.frames[this.direction * 2 + this.animationFrame]
    }
}