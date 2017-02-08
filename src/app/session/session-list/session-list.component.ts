import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Session } from '../models/session';
import {TimeSlot} from '../models/timeSlot';
import * as moment from 'moment';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css', '../../app.component.css']
})
export class SessionListComponent implements OnInit {

  sessionList: any;
  errorMessage: string;

  constructor(private _sessionService: SessionService) { }

  ngOnInit() {
		this.getSessions();
	}

	getSessions()
	{
		this._sessionService.getSessions()
				.subscribe(
        data => this.sessionList = data,
        error => this.errorMessage = <any>error
				);
	}


	existingSession(sessionList: any, time_slot: any, meeting_space: any) {
		let result = sessionList.sessions.filter((s: any) => s.time_slot_id === time_slot.id && s.meeting_space_id === meeting_space.id)[0];
		return result;
	}

	sessionListHeaders() {
		let result = [{class: 'meeting-space-header', text: 'Meeting Space' }]

		for (let ts of this.sessionList.time_slots) {
			if (this.showPastSessions() || !ts.isTimeSlotInPast()) {
				result.push(
				{
					class: (ts.id == this.sessionList.current_time_slot.id ? 'current' : 'not-current'), 
					text: this.formatTimeSlot(ts)
				});
			}
		}
		return result;
	}

	showPastSessions() {
		return true;
   //      (params['show-past-sessions'] && params['show-past-sessions'].to_i == 0) ? false : true
	}

	formatTimeSlot(timeSlot: TimeSlot) : string {
		return this.formatTimeSlotDate(timeSlot.start_time) + '-' + this.formatTimeSlotDate(timeSlot.end_time);
	}

	formatTimeSlotDate(date: Date) : string {
		return moment(date).format("ddd h:mma")
	}
  
}
