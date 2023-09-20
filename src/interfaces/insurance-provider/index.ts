import { GetQueryInterface } from 'interfaces';

export interface InsuranceProviderInterface {
  id?: string;
  name: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  phone_number?: string;
  email_address?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface InsuranceProviderGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  phone_number?: string;
  email_address?: string;
}
