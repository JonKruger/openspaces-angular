import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';
import { Session } from '../models/session';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.css']
})
export class SessionDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Session Detail';
    session: Session;
    errorMessage: string;
    private sub: Subscription;
    private queryParamsSub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _sessionService: SessionService) {
    }

    ngOnInit(): void {
        this.session = new Session();
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                if (!isNaN(id))
                    this.getSession(id);
        });

        this.queryParamsSub = this._route.queryParams.subscribe(
            params => {
                let timeSlotId = +params['time_slot_id'];
                if (!isNaN(timeSlotId))
                    this.session.time_slot_id = timeSlotId;

                let meetingSpaceId = +params['meeting_space_id'];
                if (!isNaN(meetingSpaceId))
                    this.session.meeting_space_id = meetingSpaceId;
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
        this.queryParamsSub.unsubscribe();
    }

    getSession(id: number) {
        this._sessionService.getSession(id).subscribe(
            session => this.session = new Session(session),
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/sessions']);
    }

    onSave(session: Session): void {
      this._sessionService.saveSession(session)
        .subscribe(result => {
          console.log(result);
          this._router.navigate(['/sessions']);
        },
        error => console.log(error));
    }


}
