import { useEffect, useState } from 'react';
import { Container } from './App.styled';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export function App() {
  const arr = useSelector(getContacts);
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('Contacts')) || arr
  );
  const [filter] = useState('');

  const takeFormData = ({ name }) => {
    setContacts(prevState => {
      if (
        prevState.some(
          contact => contact.name.toLowerCase() === name.toLowerCase()
        )
      ) {
        alert(`${name} is already in contacts`);
        return prevState;
      }

      // return [...prevState, { id: nanoid(), name, number }];
    });
  };

  useEffect(() => {
    contacts.length &&
      localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filterCorrectData = () => {
    const newNormFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(newNormFilter)
    );
  };
  // const deleteContact = id => {
  //   setContacts(contacts.filter(contact => contact.id !== id));
  // };

  const filterContacts = filterCorrectData();

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
      <ContactForm hendleSubmit={takeFormData} />

      <h2>Contacts</h2>
      <Filter
      //  value={filter}
      // onChange={filterChange}
      />
      <ContactList resultData={filterContacts} />
    </Container>
  );
}
