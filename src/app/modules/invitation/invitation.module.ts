import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitationRoutingModule } from './invitation-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { ArrivalComponent } from './arrival/arrival.component';


@NgModule({
  declarations: [
    HomepageComponent,
    ArrivalComponent
  ],
  imports: [
    CommonModule,
    InvitationRoutingModule
  ]
})
export class InvitationModule { }
