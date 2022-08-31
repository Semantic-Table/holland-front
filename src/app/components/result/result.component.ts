import { Component, OnInit } from '@angular/core';
import {Riasec} from "../../classes/riasec";
import {RiasecService} from "../../services/riasec.service";
import {EnteteService} from "../../services/entete.service";

@Component({
  selector: 'app-result .app',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
public riasec : Riasec
  constructor(private riasecService : RiasecService, private enteteService : EnteteService) {
    this.riasec = this.riasecService.riasec //on recupere l'instance de riasec pour affficher les résultat du test
    this.enteteService.title.next("Résultat")//modification du title
  }
}
