import { ContactForm } from '../ContactForm';
import { Filter } from '../Filter';
import { ContactList } from '../ContactList';
import { Frame, Container, Title, SubTitle } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Frame>
        <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter/>
      <ContactList/>
      </Frame>
    </Container>
  );
};
