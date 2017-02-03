import { Component, Input } from '@angular/core';
import { SessionService } from '../session.service';
import { Session } from '../models/session';
import { TimeSlot } from '../models/timeSlot';

@Component({
  selector: 'session-list-session',
  templateUrl: './session-list-session.component.html',
  styleUrls: ['./session-list.component.css', '../../app.component.css']
})
export class SessionListSessionComponent {
  @Input() session : Session;
  @Input() timeSlot : TimeSlot;
  @Input() meetingSpace : any;
  @Input() currentTimeSlot : TimeSlot;

	showPastSessions() {
		return true;
   //      (params['show-past-sessions'] && params['show-past-sessions'].to_i == 0) ? false : true
	}

	shouldShowSession() {
    return ((this.showPastSessions() || !this.timeSlot.isTimeSlotInPast()) && this.session);      
	}

  isCurrent() {
    return this.timeSlot.id == this.currentTimeSlot.id;
  }
  
}