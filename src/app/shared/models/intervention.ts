export interface InterventionParam {
  id?: number;
  summary?: string;
  plannedAt?: Date;
  createdAt?: Date;
}

export class Intervention {
  protected _id: number;
  protected _summary: string;
  protected _plannedAt: Date;
  protected _createdAt: Date;

  public constructor(interventionParam?: InterventionParam) {
    if (interventionParam) {
      this._id = interventionParam.id;
      this._summary = interventionParam.summary;
      this._plannedAt = interventionParam.plannedAt;
      this._createdAt = interventionParam.createdAt;
    }
  }

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get summary(): string {
    return this._summary;
  }

  public set summary(value: string) {
    this._summary = value;
  }

  public get plannedAt(): Date {
    return this._plannedAt;
  }

  public set plannedAt(value: Date) {
    this._plannedAt = value;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }

  public set createdAt(value: Date) {
    this._createdAt = value;
  }
}
