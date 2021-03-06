import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionListSessionComponent } from './session-list/session-list-session.component';
import { SessionDetailComponent } from './session-detail/session-detail.component';
import { SessionService } from './session.service';
import {SessionRoutingModule} from './session-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SessionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SessionListComponent, SessionListSessionComponent, SessionDetailComponent],
  providers: [SessionService]
})
export class SessionModule { }
