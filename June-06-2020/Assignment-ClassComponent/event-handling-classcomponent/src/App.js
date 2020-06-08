import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ContactList from './ContactList'
import data from './contact'
import { Component } from 'react';



// function App() {
//   const stateArr=useState(data);
//   const stateVar=stateArr[0];
//   const stateFn=stateArr[1];

//   const deleteContact = (id) => {
//     const newContacts = stateVar.filter((contact) => contact.id !== id);
//     stateFn(newContacts);
//   };

//   return (
//     <section id="contact-list">
//       <h1>Contacts</h1>
//       <ContactList contacts={stateVar} deleteContact={deleteContact}>

//       </ContactList>

//     </section>
//   );
// }

// export default App;

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={contacts:data}
    this.deleteContact=this.deleteContact.bind(this);
  }


  deleteContact = (id) => {
    debugger
    const newContacts = this.state.contacts.filter((contact) => contact.id !== id);
    
    this.setState({contacts:newContacts});
  }

  render(){
    const contacts=this.state.contacts;
    return (
          <section id="contact-list">
            <h1>Contacts</h1>
            <ContactList contacts={contacts} deleteContact={this.deleteContact}>
      
            </ContactList>
      
          </section>
        );
  }

}
