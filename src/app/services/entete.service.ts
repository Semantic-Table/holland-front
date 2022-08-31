import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EnteteService {
  //creation d'un BehaviorSubject, ca ressemble a un Observable, c'est un type de variables auquel on souscrit et qui permet de recuperer ca valeur en temps réel
  private _title: BehaviorSubject<string> = new BehaviorSubject<string>('')

  constructor() {

  }


  get title(): BehaviorSubject<string> {
    return this._title;
  }

  set title(value: BehaviorSubject<string>) {
    this._title = value;
  }
}
