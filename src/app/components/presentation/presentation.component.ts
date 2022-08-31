import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EnteteService} from "../../services/entete.service";

@Component({
  selector: 'app-presentation .app',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  constructor(private enteteService : EnteteService) {
    this.enteteService.title.next("Présentation")//modification du title
  }

  ngOnInit(): void {


  }

}
