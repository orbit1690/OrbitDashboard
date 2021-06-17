export default class Vector {
  constructor(public readonly x: number, public readonly y: number) {}

  public get norm(): number {
    return Math.hypot(this.x, this.y);
  }

  public get angle(): number {
    return Math.atan2(this.y, this.x);
  }

  public scale(factor: number): Vector {
    return new Vector(this.x * factor, this.y * factor);
  }

  public add(other: Vector): Vector {
    return new Vector(this.x + other.x, this.y + other.y);
  }

  public static unit(angle: number): Vector {
    return new Vector(Math.cos(angle), Math.sin(angle));
  }

  public static polar(angle: number, norm: number): Vector {
    return Vector.unit(angle).scale(norm);
  }

  public static get random(): Vector {
    return new Vector(Math.random(), Math.random());
  }

  public static readonly zero = new Vector(0, 0);
}
