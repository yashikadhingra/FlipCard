import { Component,ElementRef,Renderer,AfterViewInit} from '@angular/core';

@Component({
moduleId:module.id,
  selector: 'game',
    templateUrl: `game.component.html`,
	styleUrls:[`game.component.css`]

})
export class GameComponent implements AfterViewInit  { 
	Arr = Array; //Array type captured in a variable
  num:number = 16;
  isClass1Visible:boolean=true;
  applyclass:boolean=false;
   selected :any;
   isAdd:boolean;
 hightlightStatus: Array<boolean> = [];
  item:string[];
 add: Array<any> = [];
 bgcolor: Array<any> = [];
 store_parent:Array<any> = [];
 color:string;
 score:number;
 feedback:string="Pick a card to make a matching pair!";

 

  constructor( private el:ElementRef, private renderer:Renderer) {
//this.nativeElement = el.nativeElement;
this.score=0;
this.bgcolor = ['#42c2f4','#f44183','#e5f441','#41f4eb','#a9eff2','#42c2f4','#9bffa7','#a9eff2','#ffe5b2','#9bffa7',
'#ffe5b2','#f44183','#e5f441','#ffb2fc','#41f4eb','#ffb2fc'];
    }
 ngAfterViewInit() {
 console.log("hello");

 var m = this.bgcolor.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = this.bgcolor[m];
    this.bgcolor[m] = this.bgcolor[i];
    this.bgcolor[i] = t;
  }

console.log(this.bgcolor);
 
 }
 flip($event:any) {  
 $event.target.parentElement.classList.add('flipped');
let color =$event.target.parentElement.children[1].style.background;
//console.log(color);
this.store_parent.push($event.target.parentElement);
this.add.push(color);
console.log(this.add);
console.log("length"+this.add.length);
if(this.add.length == 2){
	if(this.add[0]==this.add[1]){
	this.score=this.score+1;
	if(this.score==8)
	{
	this.feedback="Completed!!";
	}
	else
	{
	this.feedback="pair matched...well done!";
	}
	console.log("score"+this.score);
	}
	else
	{
	this.feedback="Try Again!";
	}
}
if(this.add.length == 3)
{

	if(this.add[0]!=this.add[1]){

	this.store_parent[0].classList.remove('flipped');
	this.store_parent[1].classList.remove('flipped');
	this.feedback="Pick a card to make a matching pair!";
	}
this.add.splice(0,2);
this.store_parent.splice(0,2);
}
  };
  /*isActive(item) {
      return this.selected === item;
  };*/
 }
