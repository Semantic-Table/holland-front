import { Component, OnInit } from '@angular/core';
import {Riasec} from "../../classes/riasec";
import {RiasecService} from "../../services/riasec.service";

@Component({
  selector: 'app-result .app',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
public riasec : Riasec
  constructor(private riasecService : RiasecService) {
    this.riasec = this.riasecService.riasec
  }
}
