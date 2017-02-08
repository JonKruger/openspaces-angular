export class Session {
	session_id: number;
	title: string;
	owner: string;
	twitter_handle: string;
	twitter_url: string;
	time_slot_id: number;
	meeting_space_id: number;
	readonly: boolean;

  constructor(json: any = null) {
    if (json)
      Object.assign(this, json);
  }

	isValid() {
		return this.isEmpty(this.title) || this.isEmpty(this.owner);
	}

	isEmpty(str : string) : boolean {
    return (!str || 0 === str.length);
	}
}