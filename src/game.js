export default class Game {
    constructor({ world, view, levels }) {
        this.world = world;
        this.view = view;
        this.levels = levels;

        this.loop = this.loop.bind(this);
    }

    start() {
        requestAnimationFrame(this.loop)
    };

    loop() {
        console.log("loop")
      requestAnimationFrame(this.loop)
    };
};
