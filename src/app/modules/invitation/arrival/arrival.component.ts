import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-arrival',
  templateUrl: './arrival.component.html',
  styleUrl: './arrival.component.css'
})
export class ArrivalComponent {

  arrivalSection : boolean = true;
  travelSection : boolean = false;
  tuesdaySection : boolean = false;
  wednesdaySection:  boolean = false;
  thursdayMorningSection: boolean = false;
  temple = false;
  starbucks = false;


  ngOnInit(){

  }

selectNo() {
  console.log('ok');
  $('#warningModal').modal('show');
}

modalHide(arg0: string) {
  $('#warningModal').modal('hide');
}

selectYes(){
  this.arrivalSection = false;
  this.travelSection = true;
}

selectBus(){
  this.travelSection = false;
  this.tuesdaySection = true;
}

selectTuesdayPlan( string : String){
  this.tuesdaySection = false;
  this.wednesdaySection = true;
}

selectWednesdayPlan(){
  this.wednesdaySection = false;
  this.thursdayMorningSection = true;
  this.temple = true;
}

selectThursdayMorningPlan(){
  this.temple = false;
  this.starbucks = true;
}

}
