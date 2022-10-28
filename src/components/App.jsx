import { Form } from './Form/Form';
import { Section } from './Section/Section';
import { PhoneList } from './PhoneList/PhoneList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <>
      <Section title="PhoneContact">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <PhoneList />
      </Section>
    </>
  );
};
