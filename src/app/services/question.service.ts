import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Question} from "../interfaces/question";
import {Response} from "../interfaces/response";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private baseUrl : string= 'http://192.168.30.26:8000' // l'url de base du serveur symfony, TOUT PAR DE LA
  constructor(private httpClient : HttpClient) {//le HttpClient sert a faire les requetes api
  }

  public getQuestionById(id : number) : Observable<Question>{ //getter de toutes les question
   return this.httpClient.get<Question>(this.baseUrl + '/api/questions/' + id)
  }
  public getResponseById(request: Response | undefined) : Observable<Response>{
    return this.httpClient.get<Response>(this.baseUrl + request);
  }
}
