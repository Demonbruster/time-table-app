export interface ISubject {
  id: string;
  name: string;
  color: string;
  startTime: string;
  endTime: string;
  timePeriod?: string;
  day: string;
  place?: string;
  teacher?: string;
  note?: string;
}

export interface IDay {
  id: string;
  name: string;
  subjects: ISubject[];
}

export interface IWeek {
  days: IDay[];
}

export interface IUser {
  id: string;
  name: string;
}
