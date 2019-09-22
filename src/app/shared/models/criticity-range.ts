export interface CriticityRangeParam {
  min?: number;
  max?: number;
  value?: number;
}

export class CriticityRange {
  protected _min: number;
  protected _max: number;
  protected _value: number;

  public constructor(criticityRangeParam?: CriticityRangeParam) {
    if (criticityRangeParam) {
      this._min = criticityRangeParam.min;
      this._max = criticityRangeParam.max;
      this._value = criticityRangeParam.value;
    }
  }

  public get min(): number {
    return this._min;
  }

  public set min(value: number) {
    this._min = value;
  }

  public get max(): number {
    return this._max;
  }

  public set max(value: number) {
    this._max = value;
  }

  public get value(): number {
    return this._value;
  }

  public set value(value: number) {
    this._value = value;
  }
}
