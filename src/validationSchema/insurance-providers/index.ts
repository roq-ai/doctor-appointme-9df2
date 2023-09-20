import * as yup from 'yup';

export const insuranceProviderValidationSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().nullable(),
  city: yup.string().nullable(),
  state: yup.string().nullable(),
  zip_code: yup.string().nullable(),
  phone_number: yup.string().nullable(),
  email_address: yup.string().nullable(),
});
