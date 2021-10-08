import React from 'react';
import { BUTTON } from './styles';

const Button = (props) => {
    return (
        <BUTTON>
            {props.children}
        </BUTTON>
    )
}

export default Button
