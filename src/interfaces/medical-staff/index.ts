import { ClinicInterface } from 'interfaces/clinic';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MedicalStaffInterface {
  id?: string;
  job_title: string;
  clinic_id: string;
  user_id: string;
  start_date?: any;
  end_date?: any;
  shift?: string;
  created_at?: any;
  updated_at?: any;

  clinic?: ClinicInterface;
  user?: UserInterface;
  _count?: {};
}

export interface MedicalStaffGetQueryInterface extends GetQueryInterface {
  id?: string;
  job_title?: string;
  clinic_id?: string;
  user_id?: string;
  shift?: string;
}
