import styled from "@emotion/styled";

const Button = styled.button`
    font-weight: 700;
    text-transform: uppercase;
    border: 1px solid #d1d1d1;
    padding: .8rem 2rem;
    margin-right: 1rem;
    &:last-of-type{
        margin-right: 0;
    }
    background-color: ${props => props.bgColor ? '#DA552f' : 'white'};
    color: ${props => props.bgColor ? 'white' : '#000'};
    &:hover{
        cursor: pointer;
    }
`

export default Button; 