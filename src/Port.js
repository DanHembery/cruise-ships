class Port {
    constructor(portName){
    this.portName = portName
    this.ships = [];
    };
    addShip(ship) {
        this.ships.push(ship); 
    };
    removeShip(ship) {
        const index = this.ships.indexOf(ship);
        if (index > -1) {
            this.ships.splice(index);
        };
    };
};

module.exports = Port;