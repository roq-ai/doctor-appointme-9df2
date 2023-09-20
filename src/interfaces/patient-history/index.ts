import { GetQueryInterface } from 'interfaces';

export interface PatientHistoryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface PatientHistoryGetQueryInterface extends GetQueryInterface {
  id?: string;
}
