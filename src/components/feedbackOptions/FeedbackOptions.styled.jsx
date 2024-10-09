import styled from "@emotion/styled";


export const OptionContainer = styled.ul`
    display: flex;
    justify-content: center;
    
    li button {
        cursor: pointer;
    }
    
    li + li {
        margin-left: 10px;
    }
`

