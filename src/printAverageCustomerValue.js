import {readPeople} from "./readPeople";
import {averageCustomerValue, peopleWithinRange} from "./customers";


readPeople(people => {

    const bristolLocation = {latitude: 51.450167, longitude: -2.594678};

    const bristol200Customers = peopleWithinRange(people, bristolLocation, 200);

    console.log("Total average value of customers within 200km of Bristol: " + averageCustomerValue(bristol200Customers).toFixed(2));
})