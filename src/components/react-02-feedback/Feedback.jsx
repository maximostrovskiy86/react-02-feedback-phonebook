import React, {Component} from "react";


class Feedback extends Component {

    handleClick = (e) => {
        this.setState(prevState => {
            return {[e.target.name]: prevState[e.target.name] + 1};
        });
    }



    render() {
        const {good, neutral, bad} = this.state;

        return <div>
            <h1>Please Leave feedback</h1>
            <form>
                <input name='good' type="button" value="Good" onClick={this.handleClick}/>
                <input name='neutral' type="button" value="Neutral" onClick={this.handleClick}/>
                <input name='bad' type="button" value="Bad" onClick={this.handleClick}/>
            </form>
            <h2>Statistics</h2>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {this.countTotalFeedback()}</p>
            <p>Positive Feedback: {this.countPositiveFeedbackPercentage()} %</p>
        </div>;
    }
}

export default Feedback;