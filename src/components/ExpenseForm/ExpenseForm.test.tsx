import React from 'react'
import ExpenseForm from './ExpenseForm'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from '../../index'
import { ExpensesStore } from '../../store/domainStore'

it('test expense form type', () => {
    const { rerender } = render(
        <StoreProvider value={new ExpensesStore()}>
            <BrowserRouter>
                <ExpenseForm formType='create' />
            </BrowserRouter>
        </StoreProvider>
    )

    let editButton = screen.queryByText(/Remove Expense/i)
    expect(editButton).toBeFalsy()

    rerender(
        <StoreProvider value={new ExpensesStore()}>
            <BrowserRouter>
                <ExpenseForm formType='edit' />
            </BrowserRouter>
        </StoreProvider>
    )
    editButton = screen.getByText(/Remove Expense/i)
    expect(editButton).toBeTruthy()
})