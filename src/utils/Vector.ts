export default class Vector {
  constructor(public readonly x: number, public readonly y: number) {}

  public get norm(): number {
    return Math.hypot(this.x, this.y);
  }

  public get angle(): number {
    return Math.atan2(this.y, this.x);
  }

  public static get random(): Vector {
    return new Vector(Math.random(), Math.random());
  }

  public static readonly zero = new Vector(0, 0);
}
