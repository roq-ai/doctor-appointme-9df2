import { UserInterface } from 'interfaces/user';
import { ClinicInterface } from 'interfaces/clinic';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  date_time: any;
  patient_id: string;
  clinic_id: string;
  doctor_id: string;
  diagnosis?: string;
  prescription?: string;
  created_at?: any;
  updated_at?: any;

  user_appointment_patient_idTouser?: UserInterface;
  clinic?: ClinicInterface;
  user_appointment_doctor_idTouser?: UserInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  patient_id?: string;
  clinic_id?: string;
  doctor_id?: string;
  diagnosis?: string;
  prescription?: string;
}
