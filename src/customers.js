import {haversineDistance} from "./distance.js";

/**
 * Convert a person to a command-line friendly string
 * @param {Object} person
 * @returns {string}
 */
export function showPerson(person) {
    return`
ID: ${person.id}
Name: ${person.name.first} ${person.name.last}
Email: ${person.email}
Value: ${person.value}
    `;
}

/**
 * Filter people within a certain distance of a given location.
 * @param {Object[]} people
 * @param {Object} location in format {latitude: 0, longitude: 0}
 * @param {float} distance KM from location
 * @returns {Object[]} subset of people
 */
export function peopleWithinRange(people, location, distance) {
    return people.filter(p => haversineDistance(p.location, location) <= distance);
}

/**
 * Sort an array of people by value, highest first.
 * @param {Object[]} people
 * @returns {Object[]}
 */
export function sortByValue(people) {
    return people.sort((a, b) => {
        return b.value - a.value;
    });
}

/**
 * Get the average value from a list of people.
 * @param {Object[]} people
 * @returns {number}
 */
export function averageCustomerValue(people) {
    if (people.length === 0) return 0;

    const values = people.map(p => parseFloat(p.value)),
          total = values.reduce((x, y) => x + y);

    return total / people.length;
}