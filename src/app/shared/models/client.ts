import { Asset } from './asset';

export interface ClientParam {
  id?: number;
  name?: string;
  logo?: string;
  assets?: Asset[];
  createdAt?: Date;
}

export class Client {
  protected _id: number;
  protected _name: string;
  protected _logoUrl: string;
  protected _assets: Asset[];
  protected _createdAt: Date;

  public constructor(clientParam?: ClientParam) {
    if (clientParam) {
      this._id = clientParam.id;
      this._name = clientParam.name;
      this._logoUrl = clientParam.logo;
      this._createdAt = clientParam.createdAt;

      if (clientParam.assets) {
        this._assets = clientParam.assets.map((asset: Asset) => {
          return new Asset(asset);
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

  public get logoUrl(): string {
    return this._logoUrl;
  }

  public set logoUrl(value: string) {
    this._logoUrl = value;
  }

  public get assets(): Asset[] {
    return this._assets;
  }

  public set assets(value: Asset[]) {
    this._assets = value;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }

  public set createdAt(value: Date) {
    this._createdAt = value;
  }
}
