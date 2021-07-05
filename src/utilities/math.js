/**
 * Generates a random interval between the minimum and maximum, inclusive
 * @param {Number} min  The minimum value
 * @param {Number} max  The maximum value
 * @returns             A random integer between the min and max, inclusive
 */
export function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
