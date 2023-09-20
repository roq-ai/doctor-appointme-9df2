import axios from 'axios';
import queryString from 'query-string';
import { PatientHistoryInterface, PatientHistoryGetQueryInterface } from 'interfaces/patient-history';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPatientHistories = async (
  query?: PatientHistoryGetQueryInterface,
): Promise<PaginatedInterface<PatientHistoryInterface>> => {
  const response = await axios.get('/api/patient-histories', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPatientHistory = async (patientHistory: PatientHistoryInterface) => {
  const response = await axios.post('/api/patient-histories', patientHistory);
  return response.data;
};

export const updatePatientHistoryById = async (id: string, patientHistory: PatientHistoryInterface) => {
  const response = await axios.put(`/api/patient-histories/${id}`, patientHistory);
  return response.data;
};

export const getPatientHistoryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/patient-histories/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePatientHistoryById = async (id: string) => {
  const response = await axios.delete(`/api/patient-histories/${id}`);
  return response.data;
};
