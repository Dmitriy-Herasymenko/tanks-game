import Tank from "./tank.js";

export default class World {
    grid = [];
    player1Tanks = new Tank();
    player2Tanks = null;
    enemyTanks = {};
}