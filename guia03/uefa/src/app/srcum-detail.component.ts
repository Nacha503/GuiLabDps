import { Component, Input } from '@angular/core';
import { Scrum } from './scrum';

@Component({
    selector: 'my-scrum-detail',
    template: `
    <div *ngIf="scrum">
    <h2>{{scrum.name}} Detalles:</h2>
    <div>Guía # 03 : Introducción Angular
    Desarrollo de Aplicaciones Web con Software Interpretado en el Cliente 42
    <label>id:</label>{{scrum.id}}
    </div>
    <div>
    <label>nombre:</label>
    <input [(ngModel)]="scrum.name" placeholder="name">
    </div>
    <div>
    <label>Jugadores:</label>
    <ul>
    <li *ngFor="let item of scrum.players">
    <span >{{item}}</span>
    </li>
    </ul>
    </div>
    </div>
    `
})

export class ScrumDetailComponent{
    @Input()
    scrum:Scrum;
}