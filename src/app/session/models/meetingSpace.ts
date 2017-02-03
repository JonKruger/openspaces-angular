export class MeetingSpace {
  id: number;
  name: string;

  constructor(json: any = null) {
    if (json)
      Object.assign(this, json);
  }
}