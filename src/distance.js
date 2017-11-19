
/**
 * Get the distance in KM from location1 to location2
 * where locations should be provided in the format {latitude: 0, longitude: 0}
 * @param location1
 * @param location2
 * @returns {number}
 */
export function haversineDistance(location1, location2) {

    function toRadians(n) {
        return n * Math.PI / 180;
    }

    const [lat1Rad, lat2Rad, lng1Rad, lng2Rad] = [location1.latitude, location2.latitude, location1.longitude, location2.longitude].map(toRadians);

    const latDiff = lat2Rad - lat1Rad;
    const lngDiff = lng2Rad - lng1Rad;

    const earthsRadius = 6372.8;

    const a = Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
        Math.cos(lat1Rad) * Math.cos(lat2Rad) *
        Math.sin(lngDiff / 2) * Math.sin(lngDiff / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return c * earthsRadius;
}
