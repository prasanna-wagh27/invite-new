import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ArrivalComponent } from './arrival/arrival.component';

const routes: Routes = [
  {
    path: '',
    component : HomepageComponent
  },
  {
    path: 'arrival',
    component : ArrivalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvitationRoutingModule { }
