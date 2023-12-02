import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { Text, DeleteBnt, DeleteIcon } from './Contact.styled';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const { deleteContact } = contactsOperations;
  const { name, number, id } = contact;

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <div>
        <Text>{name}</Text>
        <Text>{number}</Text>
      </div>
      <DeleteBnt type="button" onClick={handleDelete}>
        <DeleteIcon />
      </DeleteBnt>
    </>
  );
}
