import React from 'react'
import Button from './Button'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'


test('should render add button', () => {
    render(<Button label='Create Expense' />)
    expect(screen.getByRole('button')).toHaveTextContent(/create expense/i)
})

test('should render delete button', () => {
    render(<Button deleteButton={true} label={'Remove Expense'} />)
    expect(screen.getByRole('button')).toHaveTextContent(/remove expense/i)
    expect(screen.getByRole('button')).toHaveStyle('background-color: #888;')
})