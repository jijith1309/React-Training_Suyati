import React,{useState,createContext} from 'react';
// import logo from './logo.svg';
import './App.css';
import ContactList from './ContactList'
import data from './contact'
import ContactForm from './ContactForm'
import { v4 as uuidv4 } from "uuid";



export const ContactContext = createContext();

function App() {
  const contact_state=useState(data);
  const contacts=contact_state[0];
  const updateContacts=contact_state[1];

  const addContact=(name,email)=>{
   const newContact={
     id:uuidv4(),
     name,
     email
   }
   const newContactArr=[...contacts,newContact]
   updateContacts(newContactArr);
  }

  const deleteContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    updateContacts(newContacts);
  };

  return (
    // <div >
    //   <h1>Hello Day 5 react training</h1>
    // </div>
    <ContactContext.Provider value={{ contacts, deleteContact,addContact }}>
    <section id="contact-list">
      <h1>Contacts</h1>
      <ContactForm addContact={addContact}></ContactForm>
      <ContactList contacts={contacts} deleteContact={deleteContact}>

      </ContactList>

    </section>
    </ContactContext.Provider>
  );
}

export default App;
