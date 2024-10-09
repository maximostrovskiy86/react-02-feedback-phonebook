import {OptionContainer} from "./FeedbackOptions.styled";
import {nanoid} from "nanoid";


const FeedbackOptions = ({options, onLeaveFeedback}) => {

    return (
        <OptionContainer>
            {options.map((item) => {
                const liId = nanoid();

                return <li key={liId}>
                    <button name={item} type="button" onClick={onLeaveFeedback}>{item}</button>
                </li>
                })}
        </OptionContainer>
    )
}

export default FeedbackOptions