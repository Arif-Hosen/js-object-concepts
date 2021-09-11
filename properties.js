const bottle = {
    color: 'red',
    price: 50,
    hold: 'water',
    isCleaned: true
};
//getting all properties name
const keys = Object.keys(bottle);

// get all values
const values = Object.values(bottle);

//get properties & values
const pairs = Object.entries(bottle);

//freeze
Object.freeze(bottle);

//seal
Object.seal(bottle);
bottle.price = 100;
bottle.weight = 200;

//delete  (if we define object is seal, we cann't delete or add ,but property value can be change)
delete bottle.isCleaned;
console.log(bottle);