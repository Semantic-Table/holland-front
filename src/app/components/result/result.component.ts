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
    this.riasec = this.riasecService.riasec
    this.enteteService.title.next("Résultat")
  }
}
