import {readFile} from "fs";

/**
 * Read the JSON file containing people, and then run the supplied callback, with the people given as the only argument.
 * @param callback
 */
export function readPeople(callback) {

    readFile('people.json', (err, data) => {

        if (err) throw err;

        const people = JSON.parse(data);

        callback(people);
    });
}