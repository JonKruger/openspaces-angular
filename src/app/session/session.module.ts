import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionDetailComponent } from './session-detail/session-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SessionListComponent, SessionDetailComponent]
})
export class SessionModule { }
