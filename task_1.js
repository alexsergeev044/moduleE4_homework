function showObj (myObj) {
    for (let key in myObj) {
        if (myObj.hasOwnProperty(key)) {
            console.log(`${key} - ${myObj[key]}`);
        };
    };
};

const obj = {
    a: 1,
    b: "hello",
    c: [1, true]
};

showObj(obj);
