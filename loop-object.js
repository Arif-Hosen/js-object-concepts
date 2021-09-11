const bottle = {
    color: 'red',
    price: 50,
    hold: 'water',
    isCleaned: true
};

/* 
----loop
for (let i=0; i<10; i++){}
for (const num of numbers){} //array
for (const prop in student){} //object
*/

for (const prop in bottle) {
    // console.log(prop, bottle[prop]);
}

const keys = Object.keys(bottle);
// console.log(keys);
for (const prop of keys) {
    // console.log(prop, bottle[prop]);
}

// advanced
const entries = Object.entries(bottle);
// console.log(entries);
// const [key, value] = ['color', 'red'];
// console.log(key, value);

for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}

