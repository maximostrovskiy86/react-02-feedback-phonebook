import ContactItem from "../contactItem";

const ContactList = ({contacts, deleteUser}) => {

    console.log("contacts", contacts);
    return (
        <ul>
            {contacts.map(contact => (
                <ContactItem key={contact.id} contact={contact} deleteUser={deleteUser} id={contact.id}/>
            ))}
        </ul>
    )
}

export default ContactList;