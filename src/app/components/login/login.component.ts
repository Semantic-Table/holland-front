import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {QuestionService} from "../../services/question.service";
import {EnteteService} from "../../services/entete.service";

@Component({
  selector: 'app-login .app',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private enteteService: EnteteService) {
    this.enteteService.title.next('Atelier Bilan Orientation')
  }


}
