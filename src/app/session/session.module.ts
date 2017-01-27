import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionDetailComponent } from './session-detail/session-detail.component';
import { SessionService } from './session.service';
import {SessionRoutingModule} from './session-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SessionRoutingModule
  ],
  declarations: [SessionListComponent, SessionDetailComponent],
  providers: [SessionService]
})
export class SessionModule { }
