import { Contacts } from './Contacts';
import { Filter } from './Filter';
import { Forma } from './Forma';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <Forma />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </Container>
  );
};
