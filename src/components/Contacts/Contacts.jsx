import { deleteContact } from 'redux/contacts/operations';
import { ContactsListEl, ContactsList } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { Button } from '@chakra-ui/react';

export const Contacts = ({name}) => {
  const contactsValue = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.filters.filter);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();
  console.log(contactsValue);
  console.log(filterValue);

  
  const delContact = contactId => {
    dispatch(deleteContact(contactId)).unwrap();
    Notify.success(`Contact was deleted`);
  };

  const getVisibleContacts = contactsValue.filter(({ name }) =>
      name.toLowerCase().includes(filterValue)
    );

  return (
    <>
    {isLoading && <p>Loading...</p>}
      <ContactsList >
        {getVisibleContacts.map(el => {
          return (
            <ContactsListEl  key={el.id}>
              {el.name} <span>{el.number }</span>
              <Button type="button" isDisabled = {isLoading} isLoading = {isLoading} onClick={() => delContact(el.id)}>
               Delete
              </Button>
            </ContactsListEl>
          );
        })}
      </ContactsList>
    </>
  );
};

