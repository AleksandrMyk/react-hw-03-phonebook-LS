import React, { Component } from 'react';
import style from './App.module.css';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList.js';
import ContactFilter from './contactFilter/ContactFilter.js';
import { v4 as uuid } from 'uuid';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const persistedTask = localStorage.getItem('contact');
    if (persistedTask) {
      this.setState({
        contacts: JSON.parse(persistedTask),
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contact', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const contact = {
      id: uuid(),
      name: name,
      number: number,
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  removeContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  changeFilter = filter => {
    this.setState({ filter });
  };
  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { filter } = this.state;
    return (
      <section>
        <div className={style.box}>
          <h1 className={style.mainTitle}>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
          <ContactFilter value={filter} onFilter={this.changeFilter} />
          <ContactList
            onRemoveContact={this.removeContact}
            contacts={this.getFilteredContacts()}
          />
        </div>
      </section>
    );
  }
}
