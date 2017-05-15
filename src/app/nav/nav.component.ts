import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

	constructor(private elementRef: ElementRef) { }

	//the indicator Positon;
	itemPositon:number =  -1;
	//indicator bar positon;
	linePositon:string = '-2500px 0';
	
	moveX(event){
		//get the the current element
		let target = event.currentTarget || event.target || event.srcElement;
	  
	  	//if the curent element is collapsed, it will toggle to show, get the current element's positon
	    if(target.className == 'collapsed') {
	    	//get the curent element left position
	    	this.itemPositon = target.offsetLeft + target.offsetWidth/2 - 15;
	    	//get indicator bar positon
	    	this.linePositon = target.offsetLeft - 2500 +"px 0"; 
	    } else {
	    	this.itemPositon = -1;
	    } 

	}
	hideCollapse(id){
	    //get the Element which needs to hide
	   const node = document.getElementById(id);

	   //check if the Element has class 'collapse in' that means its 'show' status. 
	   //hide it by replacing 'collapse in' with class 'collapse';
	   if(node.className.indexOf('collapse in') > -1) {
	   		node.className = node.className.replace('collapse in', 'collapse');
	   }   
	}
	ngOnInit() {}
}
