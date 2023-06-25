import { deleteContactsThunk, getContactsThunk } from 'redux/operations';
import { ContactsListEl, ContactsList, ContactsBtn } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Loader } from 'components/Loader';

export const Contacts = () => {
  const contactsValue = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.filter);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();
  console.log(contactsValue);
  console.log(filterValue);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const delContact = contactId => {
    dispatch(deleteContactsThunk(contactId));
  };

  const getVisibleContacts = contactsValue.filter(({ name }) =>
      name.toLowerCase().includes(filterValue.toLowerCase())
    );

  return (
    <>
    {isLoading && <p>Loading...</p>}
      <ContactsList>
        {getVisibleContacts.map(el => {
          return (
            <ContactsListEl key={el.id}>
              {el.name} <span>{el.phone}</span>
              <ContactsBtn type="button" disabled = {isLoading} onClick={() => delContact(el.id)}>
              {isLoading? <Loader/> : 'Delete'}
              </ContactsBtn>
            </ContactsListEl>
          );
        })}
      </ContactsList>
    </>
  );
};