import React, {Component} from "react";
import './App.css';
import Container from "./container";
import Section from "./section";
import Form from "./form";
import ContactList from "./contactList";
import Filter from "./filter";


class App extends Component {

    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
    }


    setFilter = (e) => {
        console.log("e", e.target.value);
        this.setState({filter: e.target.value});
    }


    addUser = (user) => {
        console.log("user", user)
        this.setState((prevState) => ({
            contacts: [...prevState.contacts, user],
        }));
    }

    render() {
        const normalizedFilter = this.state.filter.toLowerCase();
        const visibleContacts = this.state.contacts.filter(item =>
            item.name.toLowerCase().includes(normalizedFilter));
        
        return (
            <Container>
                <Section title="Phonebook">
                    <Form addUser={this.addUser}/>
                </Section>
                <Section title="Contacts">
                    <Filter filter={this.state.filter} setFilter={this.setFilter}/>
                    <ContactList contacts={visibleContacts}/>
                </Section>
            </Container>
        );
    }

}

export default App;
