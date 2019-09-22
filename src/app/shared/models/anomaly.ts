import { CriticityRange } from './criticity-range';

export interface AnomalyParam {
  id?: number;
  status?: string;
  criticityRange?: CriticityRange;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Anomaly {
  public static readonly STATUS_CREATED = 'created';
  public static readonly STATUS_PENDING = 'pending';
  public static readonly STATUS_IN_PROGRESS = 'in progress';
  public static readonly STATUS_RESOLVED = 'resolved';

  protected _id: number;
  protected _status: string;
  protected _criticityRange: CriticityRange;
  protected _createdAt: Date;
  protected _updatedAt: Date;

  public constructor(anomalyParam?: AnomalyParam) {
    if (anomalyParam) {
      this._id = anomalyParam.id;
      this._status = anomalyParam.status;
      this._criticityRange = new CriticityRange(anomalyParam.criticityRange);
      this._createdAt = anomalyParam.createdAt;
      this._updatedAt = anomalyParam.updatedAt;
    }
  }

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get status(): string {
    return this._status;
  }

  public set status(value: string) {
    this._status = value;
  }

  public get criticityRange(): CriticityRange {
    return this._criticityRange;
  }

  public set criticityRange(value: CriticityRange) {
    this._criticityRange = value;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }

  public set createdAt(value: Date) {
    this._createdAt = value;
  }

  public get updatedAt(): Date {
    return this._updatedAt;
  }

  public set updatedAt(value: Date) {
    this._updatedAt = value;
  }

  public isCreated(): boolean {
    return this._status === Anomaly.STATUS_CREATED;
  }

  public isPending(): boolean {
    return this._status === Anomaly.STATUS_PENDING;
  }

  public isInProgress(): boolean {
    return this._status === Anomaly.STATUS_IN_PROGRESS;
  }

  public isResolved(): boolean {
    return this._status === Anomaly.STATUS_RESOLVED;
  }
}
