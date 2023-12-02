import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, contactsOperations } from 'redux/contacts';
import ContactsForm from 'components/ContactsForm';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import Loader from 'components/Loader';
import Error from 'components/Error';
import { Container, Title } from './ContactsPage.styled';

export default function ContactsPage() {
  const dispatch = useDispatch();

  const { selectContacts, selectIsLoading, selectError } = contactsSelectors;
  const { fetchContacts } = contactsOperations;

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, fetchContacts]);

  return (
    <Container>
      <ContactsForm />
      <Title>Contacts</Title>
      <Filter />
      {contacts.length !== 0 && <ContactsList />}
      {error && (
        <Error text={'Something went wrong, please reload this page'} />
      )}
      {isLoading && <Loader />}
    </Container>
  );
}
