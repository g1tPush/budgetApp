import React from 'react'
import ExpensesList from './ExpensesList'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter } from 'react-router-dom'

describe('expense list', () => {
    beforeEach(function () {
        this.store = {
            id: uuidv4(),
            content: 'Iphone',
            date: moment(),
            note: 'Good choice',
            amount: 1000
        }
    })

    it('renders expense list', function () {
        render(
            <BrowserRouter>
                <ExpensesList expensesList={[this.store]} />
            </BrowserRouter>
        )

        const expense = screen.getByText(/Iphone/i)
        expect(expense).toBeTruthy()

        let noExpenses = screen.queryByText(/No expenses/i)
        expect(noExpenses).toBeFalsy()
    })

    it('does not have expenses to render', function () {
        render(
            <BrowserRouter>
                <ExpensesList expensesList={[]} />
            </BrowserRouter>
        )

        const content = screen.getByText(/No expenses/i)
        expect(content).toBeTruthy()

        const expense = screen.queryByText(/Iphone/i)
        expect(expense).toBeFalsy()
    })
})