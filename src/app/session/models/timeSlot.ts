export class TimeSlot {
  id: number;
  start_time: Date;
  end_time: Date;

  constructor(json: any = null) {
    if (json)
      Object.assign(this, json);
  }
  
  isTimeSlotInPast() {
    let endTime = +this.end_time;
    let comparisonTime = +new Date(+new Date() - (15 * 60000));
    return endTime < comparisonTime;
  }
}