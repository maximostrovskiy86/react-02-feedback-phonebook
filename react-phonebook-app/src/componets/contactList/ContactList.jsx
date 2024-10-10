import ContactItem from "../contactItem";

const ContactList = ({contacts}) => {
    return (
        <ul>
            {contacts.map(contact => <ContactItem key={contact.id} contact={contact}/>)}
        </ul>
    )
}

export default ContactList;