import {FormContainer} from "./Form.styled";


const Form = (props) => {
    return (
        <FormContainer>
            <label htmlFor="">Name

                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <button type="button">Add contact</button>
        </FormContainer>
    )
}

export default Form;