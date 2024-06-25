// Importações necessárias
const EARTH_RADIUS = 6371e3; 

function haversineDistance([lat1, lon1]: [number, number], [lat2, lon2]: [number, number]): number {
    const toRadians = (degrees: number) => degrees * (Math.PI / 180);

    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = EARTH_RADIUS * c;
    return distance;
}

export const calculateDistanceAndTime = (position: [number, number], location: [number, number], speedKmh: number = 5) => {
    const distanceMeters = haversineDistance(position, location);
    const speedMs = speedKmh * 1000 / 3600;
    const timeSeconds = distanceMeters / speedMs;
    const timeMinutes = timeSeconds / 60;

    return {
        distanceMeters: distanceMeters.toLocaleString('en-us', {maximumSignificantDigits: 2}),
        timeMinutes: timeMinutes.toLocaleString('en-us', {maximumSignificantDigits: 1}),
    };
}