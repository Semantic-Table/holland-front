export class Riasec {
  private _realiste : number;
  private _investigateur : number;
  private _artistique : number;
  private _social : number;
  private _entreprenant : number;
  private _conventionnel : number;

  constructor(realiste: number, investigateur: number, artistique: number, social: number, entreprenant: number, conventionnel: number) {
    this._realiste = realiste;
    this._investigateur = investigateur;
    this._artistique = artistique;
    this._social = social;
    this._entreprenant = entreprenant;
    this._conventionnel = conventionnel;
  }

  get realiste(): number {
    return this._realiste;
  }

  set realiste(value: number) {
    this._realiste = value;
  }

  get investigateur(): number {
    return this._investigateur;
  }

  set investigateur(value: number) {
    this._investigateur = value;
  }

  get artistique(): number {
    return this._artistique;
  }

  set artistique(value: number) {
    this._artistique = value;
  }

  get social(): number {
    return this._social;
  }

  set social(value: number) {
    this._social = value;
  }

  get entreprenant(): number {
    return this._entreprenant;
  }

  set entreprenant(value: number) {
    this._entreprenant = value;
  }

  get conventionnel(): number {
    return this._conventionnel;
  }

  set conventionnel(value: number) {
    this._conventionnel = value;
  }
}
