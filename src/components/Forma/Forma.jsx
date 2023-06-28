import { Input } from './Forma.styled';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { addContacts } from 'redux/contacts/operations';
import { Button } from '@chakra-ui/react';

export const Forma = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleSubmit = e => {
    e.preventDefault();

    const contact = {
      id: nanoid(),
      name: e.target.name.value,
      number: e.target.number.value,
    };
    if (contacts.find(({ name }) => name.toLowerCase() === contact.name.toLowerCase())) {
      Notify.info(`${contact.name} is in your contacts`);
      return;
    }
    dispatch(addContacts(contact)).unwrap();
    Notify.success(`Contact is added`);;
    e.target.reset();
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameInputId}
        />
        </label>

        <label>
          Number
          <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberInputId}
        />
        </label>
        <Button marginBottom={5} type="submit">Add contact</Button>
      </form>
    </>
  );
};
