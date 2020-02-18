module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let obj = {};
    // turns = 2^N - 1
    obj.turns = Math.pow(2, disksNumber) - 1;
    // turnsSpeed = [turns/hour], turnsSpeed / 60 / 60 = [turns/second]
    // T = S/V = turns/turnsSpeed = [turns] / [turns/second] = [second]
    obj.seconds = obj.turns / (turnsSpeed / 3600);
    // !!! different operations of division and multiplication 
    // affect the accuracy of a number differently
    return obj;
}