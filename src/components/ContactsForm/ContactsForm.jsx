import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import Notiflix from 'notiflix';
import * as yup from 'yup';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import {
  StyledForm,
  Label,
  Input,
  Button,
  StyledErrorMessage,
} from './ContactsForm.styled';

const schema = yup.object().shape({
  name: yup.string().required('It is required field'),
  number: yup
    .string()
    .matches(/^[0-9+ -]+$/, 'Invalid character')
    .required('It is required field'),
});

export default function ContactsForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.selectContacts);

  const handleSubmitForm = ({ name, number }, { resetForm }) => {
    const sameName = contacts.find(contact => contact.name === name);

    if (sameName) {
      return Notiflix.Notify.failure(
        'This contact is already in your phone book'
      );
    };

    if (name.trim().length === 0) {
      return Notiflix.Notify.failure('Please insert contact name');
    };

    dispatch(contactsOperations.addContact({ name, number }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmitForm}
      validationSchema={schema}
    >
      <StyledForm>
        <Label>
          Name
          <Input type="text" name="name" />
          <ErrorMessage name="name">
            {msg => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>
        </Label>

        <Label>
          Number
          <Input type="text" name="number" placeholder="Example: 0997755446" />
          <ErrorMessage name="number">
            {msg => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>
        </Label>
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};
