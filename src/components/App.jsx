import { Form } from './Form/Form';
import { Section } from './Section/Section';
import { ContactList } from './PhoneList/PhoneList';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactsOperations';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch()
  useEffect(()=> {dispatch(fetchContacts())},[dispatch])
  return (
    <>
      <Section title="PhoneContact">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};
