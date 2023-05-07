import * as yup from 'yup';

export const schema = yup.object().shape({
  firstName: yup.string().required('First name is required!'),
  lastName: yup.string().required('Last name is required!'),
  email: yup.string().email().required('You forgot @ tag!'),
  comment: yup.string().required('You should put your requests, so that we can take further action!'),
});
