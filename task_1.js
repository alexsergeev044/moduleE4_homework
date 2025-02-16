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



/* Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи
и значения только собственных свойств. Данная функция не должна возвращать значение.
*/
