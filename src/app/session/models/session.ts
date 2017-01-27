export class Session {
	session_id: number;
	title: number;
	owner: string;
	twitter_handle: string;
	twitter_url: string;
	time_slot_id: number;
	meeting_space_id: number;
	readonly: boolean;

  constructor(json: any) {
    if (json)
      Object.assign(this, json);
  }
}