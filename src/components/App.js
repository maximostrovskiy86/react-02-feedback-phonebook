import React, {Component} from "react";
import {Container} from './App.styled';
import Statistics from "./statistics";
import Section from "./section";
import FeedbackOptions from "./feedbackOptions";

class App extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleClick = (e) => {
        this.setState(prevState => {
            return {[e.target.name]: prevState[e.target.name] + 1};
        });
    }

    countTotalFeedback = () => {
        const {good, neutral, bad} = this.state;
        return good + bad + neutral;
    }


    countPositiveFeedbackPercentage = () => {
        return Number(Math.round((this.state.good * 100) / this.countTotalFeedback()));
    }


    render() {
        const {good, neutral, bad} = this.state;

        return (
            <Container>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleClick} />
                </Section>
                <Section title="Statistics">
                    <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback}
                                positivePercentage={this.countPositiveFeedbackPercentage}/>
                </Section>
            </Container>
        );
    }

}

export default App;
