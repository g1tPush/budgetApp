import React from 'react'
import ExpenseItem from './ExpenseItem'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'
import { render, screen } from '@testing-library/react'
import { expect } from '@jest/globals'

describe('expense item', () => {
    beforeEach(function () {
        this.store = {
            id: uuidv4(),
            content: 'Iphone',
            date: moment(),
            note: 'Good choice',
            amount: 1000
        }
    })

    it('renders expense item', function () {
        render(<ExpenseItem {...this.store} />)
        const content = screen.getByText(/Iphone/i)
        const date = screen.getByText(this.store.date.format('DD-MM-YYYY').toLowerCase())
        const amount = screen.getByText(/1000/i)

        expect(content).toBeTruthy()
        expect(date).toBeTruthy()
        expect(amount).toBeTruthy()
    })
})