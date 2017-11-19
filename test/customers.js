import assert from "assert";
import {averageCustomerValue, sortByValue} from "../dist/customers";

describe('customers', () => {
    describe('#averageCustomerValue', () => {
        it('Should correctly return the average value from an array of people', () => {
            const people = [
                {value: 13.3},
                {value: 0},
                {value: 20}
            ];
            assert.equal(11.1, averageCustomerValue(people));
        });
        it ('Should return 0 for an empty array', () => {
            assert.equal(0, averageCustomerValue([]));
        });
    });
    describe('#sortByValue', () => {
        it('Should return people in descending order of value', () => {
            const people = [
                {value: 31.3},
                {value: 12.6},
                {value: 44.7}
            ];
            assert.deepStrictEqual([44.7, 31.3, 12.6], sortByValue(people).map(p => p.value));
        });
    });
});