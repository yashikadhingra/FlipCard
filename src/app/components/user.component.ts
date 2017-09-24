import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>Hello {{name}}</h1>
  <img [src]="imgLink">
  <div [class.myclass]="applyclass">Apply class</div>
  <input type="text" [(ngModel)]="name">
  <button (click)="show()">submit</button>
  <p *ngIf="display">my name is:{{name}}</p>`,
  styles:[`.myclass{
  color:red}`]
})
export class UserComponent  { 
name:string;
imgLink="http://lorempixel.com/400/200";
applyclass=true;
display:boolean;
show(){
this.display=true;
}
 }
