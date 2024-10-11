import IconButton from "../iconButton";
import {ReactComponent as DeleteIcon} from "../../icons/cross.svg";
import {ContactItemWrapper} from "./ContactItem.styled";

const ContactItem = ({contact, deleteUser, id}) => {
    return (
        <ContactItemWrapper>
            <span>{contact.name}: </span><span>{contact.number} </span>
            <span>
                <IconButton deleteUser={deleteUser} id={id} aria-label="Delete User">
                    <DeleteIcon width={30} height={30} />
                </IconButton>
            </span>
        </ContactItemWrapper>
    )
}

export default ContactItem;