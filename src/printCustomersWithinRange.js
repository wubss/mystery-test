import {readFile} from "fs";
import {peopleWithinRange, sortByValue, showPerson} from "./customers";
import {readPeople} from "./readPeople";

readPeople(people => {

    const bristolLocation = {latitude: 51.450167, longitude: -2.594678};

    const bristol100Customers = sortByValue(peopleWithinRange(people, bristolLocation, 100));

    console.log("Customers within 100km of Bristol (" + bristol100Customers.length + ")");
    bristol100Customers.map(p => console.log(showPerson(p)));
});