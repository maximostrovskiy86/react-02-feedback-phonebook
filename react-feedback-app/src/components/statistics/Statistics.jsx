import React from "react";
import PropTypes from "prop-types";


const Statistics = ({good, bad, neutral, positivePercentage, total}) => {
    return (
        <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total()}</p>
            <p>Positive Feedback: {positivePercentage()} %</p>
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;