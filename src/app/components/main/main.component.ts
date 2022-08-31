import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EnteteService} from "../../services/entete.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public title: string;

  constructor(private enteteService: EnteteService) {
    this.title = ''
    this.enteteService.title.subscribe(e => this.title = e)
    //on souscrit a la variable title pour l'afficher en temps réel, elle est modifiée dans les components lors de leur construction

  }

  ngOnInit(): void {
  }

}
