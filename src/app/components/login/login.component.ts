import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {QuestionService} from "../../services/question.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(private questionService : QuestionService) { }

  ngOnInit(): void {
  }
}
