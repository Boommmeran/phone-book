import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import MainTitle from 'components/MainTitle';
import StyledSection from 'components/Section';
import {
  StyledForm,
  Label,
  Input,
  Button,
  StyledErrorMessage,
} from './RegisterPage.styled';

const schema = yup.object().shape({
  name: yup.string().required('It is required field'),
  email: yup.string().required('It is required field'),
  password: yup.string().required('It is required field'),
});

export default function RegisterPage() {
  const dispatch = useDispatch();

  const handleSubmitForm = ({ name, email, password }, { resetForm }) => {
    dispatch(register({ name, email, password }));
    resetForm();
  };

  return (
    <StyledSection>
      <MainTitle>Register</MainTitle>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmitForm}
        validationSchema={schema}
      >
        <StyledForm>
          <Label>
            Name
            <Input type="text" name="name" />
          </Label>

          <Label>
            Email
            <Input
              type="email"
              name="email"
              placeholder="Example: example@mail.com"
            />
            <ErrorMessage name="email">
              {msg => <StyledErrorMessage>{msg}</StyledErrorMessage>}
            </ErrorMessage>
          </Label>
          <Label>
            Password
            <Input type="password" name="password" />
            <ErrorMessage name="password">
              {msg => <StyledErrorMessage>{msg}</StyledErrorMessage>}
            </ErrorMessage>
          </Label>
          <Button type="submit">Create account</Button>
        </StyledForm>
      </Formik>
    </StyledSection>
  );
}
