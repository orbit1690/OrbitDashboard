// TODO Use React custom hooks instead

export default class DataStore<T> {
  constructor(
    public readonly title: string,
    private readonly maxData: number
  ) {}

  private dataArray: T[];

  public get data(): T[] {
    return this.dataArray;
  }

  public update(newValue: T): void {
    if (this.dataArray.length >= this.maxData) this.dataArray.shift();
    this.dataArray.push(newValue);
  }
}
