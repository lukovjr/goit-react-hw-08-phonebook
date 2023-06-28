import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { fetchContacts } from 'redux/contacts/operations';
import { Forma } from 'components/Forma';
import { Filter } from 'components/Filter';
import { Contacts } from 'components/Contacts';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Your phonebook</title>
      </Helmet>
      <div>{isLoading && 'Please, wait...'}</div>
      <Forma />
     <Filter/>
      <Contacts />
    </HelmetProvider>
  );
}