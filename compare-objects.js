const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
const third = first;
if (first == third) {
    // console.log('Objects are equal');
}
else {
    // console.log('Objects are not equal');
}

// console.log(JSON.stringify(first));
// console.log(JSON.stringify(second));
const first2 = { b: 2, a: 1 };
const second2 = { a: 1, b: 2 };
if (JSON.stringify(first2) === JSON.stringify(second2)) {
    // console.log('Objects are equal');
}


function objectCompare(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obj1) {
        console.log('first2', obj1[prop], 'second2', obj2[prop]);
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;
}
const isEqual = objectCompare(first2, second2);
console.log(isEqual);
