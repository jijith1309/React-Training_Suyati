import React from "react";

// export const ConstList=({contacts})=>{
//   let contact1=contacts;
//   const deleteAllcontact= () => {
//     alert('Work in progress');
//     contact1=[];
//   }
//}

// const ContactList = ({ contacts }) => {
//   return (
//     <table className="contacts-table">
//       <tbody>
//         <tr>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Actions</th>
//         </tr>
//         {contact1.map((contact, i) => (
//           <tr key={i}>
//             <td>{contact.name}</td>
//             <td>{contact.email}</td>
//             <td onClick={deleteAllcontact}>CLear contacts</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };


const ContactList = (props) => {
  // let contact1 = contacts;
  // const deleteAllContact = () => {
  //   alert("Work In Progress");
  //   contact1 = [];

  // }

  const {contacts,deleteContact}=props;

  return (
    <table className="contacts-table">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Remove</th>
        </tr>
        {contacts.map((contact, i) => (
          <tr key={i}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td onClick={()=>{ deleteContact(contact.id)}}>delete contact</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};



export default ContactList;
