import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private id: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private question: number = 300;

  constructor() {
  }

  public setId(id: number) {
    this.id.next(id)
  }

  public getQuestion() {
    return this.question
  }

  public getId() {
    return this.id
  }
}
