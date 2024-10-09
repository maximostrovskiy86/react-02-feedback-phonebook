import React, {Component} from "react";
import './App.css';
import Container from "./container";
import Section from "./section";
import Form from "./form";


class App extends Component {

    state = {
        contacts: [],
        name: ''
    }

    render() {
        return (
            <Container>
                <Section title="Phonebook">
                    <Form/>
                </Section>
                <Section title="Contacts">
                </Section>
            </Container>
        );
    }

}

export default App;
