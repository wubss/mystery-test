import assert from "assert";
import {haversineDistance} from "../dist/distance";

const bristol = {latitude: 51.455315, longitude: -2.591902};
const barcelona = {latitude: 41.387917, longitude: 2.169919};
const london = {latitude: 51.500153, longitude: -0.126236};

describe('distance', () => {
    describe('#haversineDistance', () => {
        it('Should return the correct distance from Bristol to Barcelona', () => {
            assert.equal(1177, Math.round(haversineDistance(bristol, barcelona)));
        });
        it('Should return the correct distance from Bristol to London', () => {
            assert.equal(171, Math.round(haversineDistance(bristol, london)));
        });
        it('Should return the correct distance from London to Barcelona', () => {
            assert.equal(1138, Math.round(haversineDistance(london, barcelona)));
        });
        it('Should return 0 when given the same location twice', () => {
            assert.equal(0, haversineDistance(bristol, bristol));
        })
    });
});