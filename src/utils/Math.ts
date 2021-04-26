const radiansToDegrees: number = 180 / Math.PI;
const degreesToRadians: number = Math.PI / 180;
const degrees = (radians: number): number => radians * radiansToDegrees;
const radians = (degrees: number): number => degrees * degreesToRadians;
