import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  date_time: yup.date().required(),
  diagnosis: yup.string().nullable(),
  prescription: yup.string().nullable(),
  patient_id: yup.string().nullable().required(),
  clinic_id: yup.string().nullable().required(),
  doctor_id: yup.string().nullable().required(),
});
