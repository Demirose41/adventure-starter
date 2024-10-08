class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {
       this.items.push(this.currentRoom.getItemByName(itemName));

    }

    dropItem(itemName) {
        const droppedItem = this.items.find((item) => item.name == itemName);
        const droppedItemIndex = this.items.indexOf(droppedItem);
        this.items.splice(droppedItemIndex, 1);
        this.currentRoom.items.push(droppedItem);
    }

    eatItem(itemName) {
        // Fill this in

    }

    getItemByName(name) {
        return this.items.find((item) => item.name == name);
    }
}

module.exports = {
  Player,
};
