import {Injectable} from '@angular/core';
import {Riasec} from "../classes/riasec";


@Injectable({
  providedIn: 'root'
})
export class RiasecService {
  private _riasec: Riasec;

  constructor() {
    this._riasec = new Riasec(0, 0, 0, 0, 0, 0);
  }

  public addR(weight : number){
    this._riasec.realiste += weight
  }
  public addI(weight : number){
    this._riasec.investigateur += weight
  }
  public addA(weight : number){
    this._riasec.artistique += weight
  }
  public addS(weight : number){
    this._riasec.social += weight
  }
  public addE(weight : number){
    this._riasec.entreprenant += weight
  }
  public addC(weight : number){
    this._riasec.conventionnel += weight
  }


  get riasec(): Riasec {
    return this._riasec;
  }
}
