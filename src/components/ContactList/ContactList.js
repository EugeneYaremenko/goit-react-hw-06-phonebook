import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import styles from './contactList.module.css';
import fade from './fade.module.css';

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <TransitionGroup component="ul" className={styles.list}>
      {contacts.map(({ name, number, id }) => (
        <CSSTransition key={id} timeout={250} classNames={fade}>
          <li className={styles.listItem} key={id}>
            <div>
              {name}: {number}
            </div>
            <button
              className={styles.deleteBtn}
              type="button"
              onClick={() => onRemoveContact(id)}
            >
              Delete
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
      onRemoveContact: PropTypes.func,
    }),
  ),
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();

  const visibleTasks = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return { contacts: visibleTasks };
};

const mapDispatchToProps = {
  onRemoveContact: contactsActions.removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
