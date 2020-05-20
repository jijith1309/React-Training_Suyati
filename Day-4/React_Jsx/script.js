
const data = [
  {
    name: "Shinto Thomas",
    email: "sthomas@suyati.com",
  },
  {
    name: "Praphul",
    email: "pnangeelil@suyati.com",
  },
  {
    name: "Shamnad V A",
    email: "sabdul@suyati.com",
  },
];

const style={
  
    "borderSpacing": "5px"
  
}

const ContactList = (props) => {
  //className="contacts-table"
  const contacts=props.contacts;
  return <table  style={style}>
    <tbody>
    <tr>
      <th>Name</th>
      <th>Email</th>
    </tr>
    {contacts.map((con,i)=>{
      return <tr key={i}>
       <td>{con.name}</td>
       <td>{con.email}</td>
      </tr>
    })}
    {/* <tr>
      <td>Shinto Thomas</td>
      <td>sthomas@suyati.com</td>
    </tr>
    <tr>
      <td>Praphul</td>
      <td>pnangeelil@suyati.com</td>
    </tr>
    <tr>
      <td>Shamnad V A</td>
      <td>sabdul@suyati.com</td>
    </tr> */}
    </tbody>
  </table>
};

const contactManagement1 = <section id="contact-list">
  <h1>Contacts</h1>
  <ContactList contacts={data}>

  </ContactList>
</section>;

const contactManagement = React.createElement(
  "section",
  { id: "contact-list" },
  React.createElement("h1", null, "Contacts"),
  React.createElement(ContactList, { contacts: data }, null)
);
ReactDOM.render(
  contactManagement1,
  document.getElementById("react-container")
);