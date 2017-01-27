import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionDetailComponent } from './session-detail/session-detail.component';

const routes: Routes = [
      { path: '', component: SessionListComponent },
      { path: 'sessions', component: SessionListComponent },
      { path: 'sessions/new', component: SessionDetailComponent },
      { path: 'sessions/:id', component: SessionDetailComponent },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SessionRoutingModule { }
