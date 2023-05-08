import { Container } from './App.styled';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export function App() {
  return (
    <Container
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h2>Phonebook</h2>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}
