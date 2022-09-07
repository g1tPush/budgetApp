import React from 'react'
import Input from './Input'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

it('should render input', () => {
    render(<Input placeholder='Search Input' />)

    const placeholderValue = screen.queryByPlaceholderText(/Search Input/i)
    expect(placeholderValue).toBeTruthy()
})