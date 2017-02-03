import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Session } from './models/session';
import { TimeSlot } from './models/timeSlot';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/do';  // for debugging

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class SessionService {

  constructor(private http: Http) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {any} The Observable for the HTTP request.
   */
  getSessions(): Observable<any> {
    return this.http.get('http://localhost:3000/api/sessions')
                    .map((res: Response) => res.json())
                    .map(data => {
                      data.sessions = data.sessions.map(s => new Session(s));
                      data.time_slots = data.time_slots.map(ts => new TimeSlot(ts));
                      data.current_time_slot = new TimeSlot(data.current_time_slot);
                      return data;
                    })
                    //.do(data => console.log('server data:', data))  // debug
                    .catch(this.handleError);
  }

  getSession(id: number): Observable<Session> {
    return this.http.get('http://localhost:3000/api/sessions/' + id.toString())
                    .map((res: Response) => new Session(res.json()))
                    .catch(this.handleError);
  }

  saveSession(session: Session) : Observable<any> { 
    console.log("session is " + session);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let data = JSON.stringify(session);
    return this.http.post('http://localhost:3000/api/sessions/save', data, options)
                    .map((res: Response) => new Session(res.json()))
                    .catch(this.handleError);
  }

  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

