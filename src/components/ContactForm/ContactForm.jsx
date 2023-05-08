import { useState } from 'react';
import { Label, Button, Input } from './ContactForm.styled';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { nanoid } from '@reduxjs/toolkit';
import { addContacts } from 'redux/contacts';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const hendleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const onSubmit = event => {
    event.preventDefault();
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    } else {
      dispatch(addContacts({ id: nanoid(), name, number }));
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={hendleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={hendleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </form>
  );
};
