import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Question} from "../../interfaces/question";
import {QuestionService} from "../../services/question.service";
import {Response} from "../../interfaces/response";
import {RiasecService} from "../../services/riasec.service";
import {Riasec} from "../../classes/riasec";

@Component({
  selector: 'app-test .app',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public id: number = 1;
  public next: string = "";
  public question: Question | undefined;
  public responses: Response[] | undefined;

  constructor(private questionService: QuestionService, private route: Router, private riasecService: RiasecService) {
  }

  ngOnInit(): void {
    this.responses = []
    console.log(this.responses)
    this.getQuestionById()

  }

  public getQuestionById() {
    this.questionService.getQuestionById(this.id).subscribe(
      (response) => {
        console.log("requête réussie")
        this.question = response;
        console.log(response)
        this.getResponsesById()

      }
    )

  }

  public getResponsesById() {
    // @ts-ignore
    for (let i = 0; i < this.question.responses.length; i++) {
      this.questionService.getResponseById(this.question?.responses[i]).subscribe(
        (response) => {
          console.log("réponse récupérer")
          // @ts-ignore
          this.responses[i] = response
        }
      )
    }
  }

  nextQuestion(weight : number) {
    switch (this.question?.serial) {
      case 1:
        this.riasecService.addR(weight)
        break;
      case 2:
        this.riasecService.addI(weight)
        break;
      case 3:
        this.riasecService.addA(weight)
        break;
      case 4:
        this.riasecService.addS(weight)
        break;
      case 5:
        this.riasecService.addE(weight)
        break;
      case 6:
        this.riasecService.addC(weight)
        break;
    }
    console.log(this.riasecService.riasec)
    this.responses = []
    if (this.id == 50) {
      this.route.navigate(['result'])
    }
    this.id++
    this.getQuestionById()

  }
}
