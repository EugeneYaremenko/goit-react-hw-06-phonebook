import React from 'react';
import { CSSTransition } from 'react-transition-group';

import Wrapper from './Wrapper/Wrapper';
import Section from './Section/Section';
import ErrorNotification from './Notification/ErrorNotification';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import contactListFade from '../components/ContactList/fade.module.css';
import filterFade from '../components/Filter/fade.module.css';
import errorFade from '../components/Notification/fade.module.css';

const App = () => {
  return (
    <Wrapper>
      <CSSTransition timeout={2500} classNames={errorFade} unmountOnExit>
        <ErrorNotification />
      </CSSTransition>

      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <CSSTransition timeout={250} classNames={filterFade}>
          <Filter />
        </CSSTransition>
      </Section>

      <CSSTransition timeout={250} classNames={contactListFade}>
        <ContactList />
      </CSSTransition>
    </Wrapper>
  );
};

export default App;
