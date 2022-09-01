import {Component, OnInit} from '@angular/core';
import {ProgressService} from "../../services/progress.service";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  public id: number = 0;
  public question: number;
  public percent: number = 0;

  constructor(private progressService: ProgressService) {
    this.question = this.progressService.getQuestion()
    this.progressService.getId().subscribe(e => {
      this.id = e
      this.percent = e/this.question
    })

  }

  style() {
    return "background : linear-gradient(90deg, rgba(62,170,63,1) "+ this.percent*100 +"%, rgba(255,255,255,1) "+this.percent*100+"%);"
  }
}
