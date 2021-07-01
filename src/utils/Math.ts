const radiansToDegrees: number = 180 / Math.PI;
const degreesToRadians: number = Math.PI / 180;
const twoPI = 2 * Math.PI;
export const degrees = (radians: number): number => radians * radiansToDegrees;
export const radians = (degrees: number): number => degrees * degreesToRadians;
export const inchToMeter = (inches: number): number => inches * 0.0254;

export const wrapAngle = (angle: number) => ((angle % twoPI) + twoPI) % twoPI;
