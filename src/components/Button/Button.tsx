import React from 'react'
import styled from 'styled-components'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Does this button delete anything?
     */
    deleteButton?: boolean;
    /**
     * Text of the button
     */
    label: string;
}

interface ButtonTagProps {
    readonly mode: number;
}

const ButtonTag = styled.button<ButtonTagProps>`
    border: none;
    color: #fff;
    display: block;
    font-size: 20px;
    font-weight: 300;
    line-height: 1;
    padding: 10px;
    text-decoration: none;
    transition: all .4s ease;
    cursor: pointer;
    background-color: ${props => props.mode ? '#888' : '#1c88bf'};
    &:hover {
        scale: 1.05;
    }
`

const Button: React.FC<ButtonProps> = ({ deleteButton = false, label, ...props }) => {

    return (
        <ButtonTag mode={deleteButton ? 1 : 0} {...props}>
            {label}
        </ButtonTag>
    )
}

export default Button