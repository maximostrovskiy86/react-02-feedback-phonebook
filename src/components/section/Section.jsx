import {SectionContainer} from "./Section.styled";

const Section = props => {
    return (
        <SectionContainer>
            <h2>{props.title}</h2>
            {props.children}
        </SectionContainer>
    )
}


export default Section;