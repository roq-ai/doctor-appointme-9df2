import { AppointmentInterface } from 'interfaces/appointment';
import { MedicalStaffInterface } from 'interfaces/medical-staff';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ClinicInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  appointment?: AppointmentInterface[];
  medical_staff?: MedicalStaffInterface[];
  user?: UserInterface;
  _count?: {
    appointment?: number;
    medical_staff?: number;
  };
}

export interface ClinicGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
