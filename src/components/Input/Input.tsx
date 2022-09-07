import React from 'react'
import styled from 'styled-components'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * The placeholder value
     */
    placeholder?: string;
}

const InputTag = styled.input`
    padding: 10px;
    height: 50px;

`

const Input: React.FC<InputProps> = ({ placeholder, ...props }) => {
    return (
        <InputTag placeholder={placeholder} {...props} />
    )
}

export default Input