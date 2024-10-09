import React from "react";

const Statistics = ({good, bad, neutral, positivePercentage, total}) => {
    return (
        <>
            {/*<h1>Please Leave feedback</h1>*/}
            <form>
                {/*<input name='good' type="button" value="Good" onClick={this.handleClick}/>*/}
                {/*<input name='neutral' type="button" value="Neutral" onClick={this.handleClick}/>*/}
                {/*<input name='bad' type="button" value="Bad" onClick={this.handleClick}/>*/}
            </form>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive Feedback: {positivePercentage()} %</p>
        </>
    )
}

export default Statistics;