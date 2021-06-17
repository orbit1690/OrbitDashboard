const radiansToDegrees: number = 180 / Math.PI;
const degreesToRadians: number = Math.PI / 180;
export const degrees = (radians: number): number => radians * radiansToDegrees;
export const radians = (degrees: number): number => degrees * degreesToRadians;
export const inchToMeter = (inches: number): number => inches * 0.0254;