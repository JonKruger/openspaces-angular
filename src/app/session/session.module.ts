import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionDetailComponent } from './session-detail/session-detail.component';
import { SessionService } from './session.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SessionListComponent, SessionDetailComponent],
  providers: [SessionService]
})
export class SessionModule { }
