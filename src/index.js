import {readFile} from "fs";
import {peopleWithinRange, showPerson, averageCustomerValue, sortByValue} from "./customers.js";

/**
 * Print customers within 100km of Bristol, and their average value.
 */
function main() {
    readFile('people.json', (err, data) => {

        if (err) throw err;

        const bristolLocation = {latitude: 51.450167, longitude: -2.594678};

        const people = JSON.parse(data);

        const bristol200Customers = peopleWithinRange(people, bristolLocation, 200),
              bristol100Customers = sortByValue(peopleWithinRange(bristol200Customers, bristolLocation, 100));

        console.log("Customers within 100km of Bristol (" + bristol100Customers.length + ")");
        bristol100Customers.map(p => console.log(showPerson(p)));

        console.log("Total average value of customers within 200km of Bristol: " + averageCustomerValue(bristol200Customers).toFixed(2));
    });

}

main();