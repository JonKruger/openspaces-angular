import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Session } from '../models/session';

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
			if (this.showPastSessions() || !this.isTimeSlotInPast(ts)) {
				result.push(
				{
					class: (ts.id == this.sessionList.current_time_slot.id ? 'current' : 'not-current'), 
					text: this.formatTimeSlot(ts)
				});
			}
		}
		return result;
	}

	isTimeSlotInPast(time_slot: any) {
		let endTime = +new Date(<string>time_slot.end_time);
		let comparisonTime = +new Date(+new Date() - (15*60000));
		return endTime < comparisonTime;
	}

	showPastSessions() {
		return true;
   //      (params['show-past-sessions'] && params['show-past-sessions'].to_i == 0) ? false : true
	}

	shouldShowSession(sessionList: any, time_slot: any, meeting_space: any) {
		return (this.showPastSessions() || !this.isTimeSlotInPast(time_slot)) && this.existingSession(sessionList, time_slot, meeting_space);      
	}

	formatTimeSlot(timeSlot: any) {
		return 'todo';
	}

	formatTimeSlotDate(date: Date) {
		return 'todo';
	}
  
}
