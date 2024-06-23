import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  

  arrivalSection : boolean = true;
  travelSection : boolean = false;
  tuesdaySection : boolean = false;
  wednesdaySection:  boolean = false;
  thursdayMorningSection: boolean = false;
  temple = false;
  starbucks = false;
  thursdayDaySection: boolean = false;
  alternatePlan: boolean = false;
  final: boolean = false;
  mahabaleshwar: boolean = true;

  data = { tuesdayPlan: '', wednesdayPlan: '', thursdayMorningPlan: '', thursdayDayPlan: '', alternatePlan: ''}

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

selectTuesdayPlan(plan: string){
  this.data.tuesdayPlan = plan;
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

selectThursdayMorningPlanTwo(){
  this.starbucks = false;
  this.thursdayMorningSection = false;
  this.thursdayDaySection = true;
}

selectThursdayPlan(plan : string){
  this.data.thursdayDayPlan = plan;
  this.thursdayDaySection = false;
  this.alternatePlan = true;
}

hurray(){
  this.alternatePlan = false;
  this.final = true;
  this.mahabaleshwar = true;
}

ohh(){
  this.alternatePlan = false;
  this.final = true;
  this.mahabaleshwar = false;
}

}
