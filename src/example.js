import oddOnly, { sumValues } from "./sum";
import * as ops from "./operations";
import { asyncAdd } from "./async";

console.log("Hello");
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");

let myArray = [100, "Rubén", true];

myArray.forEach((val, index) => console.log(val));

let myData = {
    name: "Valeria",
    weather: "sunny",
    printMessages: () => {
        console.log(`Hello ${myData.name}`);
        console.log(`Today is ${myData.weather}`);
    }
}

myData.printMessages();

class MyData {
    constructor () {
        this.name = "Rubén";
        this.weather = "sunny";
    }

    printMessages = () => {
        console.log(`>>> Hello ${this.name}`);
        console.log(`>>> Today is ${this.weather}`);
    }
}

let myData2 = new MyData();
myData2.printMessages();

let secondObject = { ...myData2, weather: "cloudy" };
console.log(`myData: ${myData2.weather}, secondObject: ${secondObject.weather}`);

const myData3 = {
    name: "Bob",
    location: {
        city: "Paris",
        country: "France"
    },
    employment: {
        title: "Manager",
        dept: "Sales"
    }
}

function printDetails({ name, location: {city}, employment: {title} }) {
    console.log(`Name: ${name}, City: ${city}, Role: ${title}`);
}

printDetails(myData3);

let values = [10, 20, 30, 40, 50];

let total = sumValues(values);
let odds = oddOnly(values);

console.log(`Total: ${total}, Odd Total: ${odds}`);
console.log(`Multiply: ${ops.multiply(values)}`);
console.log(`Substract: ${ops.substract(1000, values)}`);

asyncAdd(values).then(total => console.log(`Main Total: ${total}`));

async function doTask() {
    let total = await asyncAdd(values);
    console.log(`Main Total 2: ${total}`);
}

doTask();
