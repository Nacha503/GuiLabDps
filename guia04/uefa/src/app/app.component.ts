import { Component, OnInit } from '@angular/core';
import { Scrum } from './scrum';
import { ScrumService } from './scrum.service'

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <div class="jumbotron">
  <div class="media">
  <div class="media-left">
  <a href="#">
  <img src="">
  </a>
  </div>
  <div class="media-body">
  <h1>{{title}}</h1>
  </div>
  </div>
  </div>
  <div class="row">
  <div class="col-sm-4">
  <h2>Equipos</h2>
  <ul class="scrums">
  <li *ngFor="let scrum of scrums"
  [class.selected]="scrum === selectedScrum"
  (click)="onSelect(scrum)">
  <span class="badge">{{scrum.id}}</span>{{scrum.name}}
  </li>
  </ul>
  </div>
  <div class="col-sm-8">
  <my-scrum-detail [scrum]="selectedScrum"></my-scrum-detail>
  </div>
  </div>
  </div>

  
  ` ,
  styleUrls: ['./app.component.css'],
  providers:[ScrumService]
})
export class AppComponent implements OnInit{
  title = 'Liga De Campeones de la UEFA';
  scrums:Scrum[];
  selectedScrum:Scrum;
  /**
   *
   */
  constructor(private scrumservices: ScrumService) {
    
  }
      getScrums():void{
       this.scrumservices.getScrums().then(scrums=>this.scrums=this.scrums)
      }

      ngOnInit():void{
        this.getScrums();
      }

      onSelect(scrum: Scrum):void{
        this.selectedScrum=scrum;
      }
}
