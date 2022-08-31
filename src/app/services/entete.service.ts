import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EnteteService {
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
