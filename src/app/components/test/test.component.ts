import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Question} from "../../interfaces/question";
import {QuestionService} from "../../services/question.service";
import {Response} from "../../interfaces/response";
import {RiasecService} from "../../services/riasec.service";
import {Riasec} from "../../classes/riasec";
import {EnteteService} from "../../services/entete.service";

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

  constructor(private questionService: QuestionService, private route: Router, private riasecService: RiasecService, private enteteService : EnteteService) {
    this.enteteService.title.next("Question 1")
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
    if (this.id == 10) {
      this.route.navigate(['result'])
    }
    this.id++
    this.enteteService.title.next("Question " + this.id)
    this.getQuestionById()

  }

  buttonColor(name: string): string {
    switch (name){
      case "j'aime":
        return "background-color : #75AB30"
        break;
      case "j'aime pas":
        return "background-color : #F68C42"
        break;
      case "faible":
        return "background-color : #CF3628"
        break;
      case "moyen":
        return "background-color : #F68C42"
        break;
      case "fort":
        return "background-color : #75AB30"
        break;
    }
    return '';
  }

  borderColor(category: string) {
    switch (category){
      case "INTERETS - ACTIVITES":
        return "border-color : #9A3A84"
        break;
      case "INTERETS - METIERS":
        return "border-color : #D6AB2A"
        break;
      case "PERSONNALITE":
        return "border-color : #28A8B0"
        break;
      case "APTITUDES":
        return "border-color : #F1695C"
        break;
    }
    return '';
  }
  backgroundColor(category: string) {
    switch (category){
      case "INTERETS - ACTIVITES":
        return "background-color : #9A3A84"
        break;
      case "INTERETS - METIERS":
        return "background-color : #D6AB2A"
        break;
      case "PERSONNALITE":
        return "background-color : #28A8B0"
        break;
      case "APTITUDES":
        return "background-color : #F1695C"
        break;
    }
    return '';
  }
}
