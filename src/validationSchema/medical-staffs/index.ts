import * as yup from 'yup';

export const medicalStaffValidationSchema = yup.object().shape({
  job_title: yup.string().required(),
  start_date: yup.date().nullable(),
  end_date: yup.date().nullable(),
  shift: yup.string().nullable(),
  clinic_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
