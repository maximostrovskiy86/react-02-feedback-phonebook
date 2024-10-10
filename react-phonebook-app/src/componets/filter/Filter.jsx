import {FilterWrapper} from "./Filter.styled";

const Filter = (props) => {
    return (
        <FilterWrapper>
            Find contacts by name:
            <input type='text' name="filter" value={props.filter} onChange={props.setFilter}/>
        </FilterWrapper>
    )
}

export default Filter;