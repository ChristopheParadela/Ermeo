import { Intervention } from './intervention';

export interface AssetParam {
  id?: number;
  name?: string;
  interventions?: Intervention[];
  createdAt?: Date;
}

export class Asset {
  protected _id: number;
  protected _name: string;
  protected _interventions: Intervention[];
  protected _createdAt: Date;

  public constructor(assetParam?: AssetParam) {
    if (assetParam) {
      this._id = assetParam.id;
      this._name = assetParam.name;
      this._createdAt = assetParam.createdAt;

      if (assetParam.interventions) {
        this._interventions = assetParam.interventions.map((intervention: Intervention) => {
          return new Intervention(intervention);
        });
      }
    }
  }

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public set interventions(value: Intervention[]) {
    this._interventions = value;
  }

  public get interventions(): Intervention[] {
    return this._interventions;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }

  public set createdAt(value: Date) {
    this._createdAt = value;
  }

  public getLastInterventionPlanned(): Intervention {
    return this._interventions.slice().sort((a: Intervention, b: Intervention) => {
      return new Date(a.plannedAt) > new Date(b.plannedAt) ? -1 : 1;
    })[0];
  }
}
