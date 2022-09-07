import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { StoreProvider } from './index'
import { ExpensesStore } from './store/domainStore'
import { BrowserRouter } from 'react-router-dom'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'
import { MemoryRouter } from 'react-router-dom'

const fixedDate = moment()

describe('expense', () => {

    it('should test navigation', async () => {
        const user = userEvent.setup()

        const firstExpense = {
            id: uuidv4(),
            content: 'Iphone',
            date: fixedDate,
            note: 'Good choice',
            amount: 1000
        }

        let store = new ExpensesStore()
        store.createExpense(firstExpense)

        render(
            <StoreProvider value={store}>
                <App />
            </StoreProvider>,
            { wrapper: BrowserRouter }
        )

        const addExpenseButton = await screen.findByText(/Add Expense/i)
        expect(addExpenseButton).toBeTruthy()

        await user.click(addExpenseButton)

        let heading = await screen.findByText(/Create Expense/i)
        expect(heading).toBeTruthy()

        render(
            <MemoryRouter initialEntries={['/']}>
                <StoreProvider value={store}>
                    <App />
                </StoreProvider>
            </MemoryRouter>
        )

        const content = await screen.findByText(/Iphone/i)
        expect(content).toBeTruthy()

        await user.click(content)

        heading = await screen.findByText(/Edit Expense/i)
        expect(heading).toBeTruthy()


        const removeButton = await screen.findByText(/Remove Expense/i)
        expect(removeButton).toBeTruthy()
    })

    it('should add expense', async () => {
        const user = userEvent.setup()

        render(
            <MemoryRouter initialEntries={['/']}>
                <StoreProvider value={new ExpensesStore()}>
                    <App />
                </StoreProvider>
            </MemoryRouter>
        )

        const addExpenseButton = await screen.findByText(/Add Expense/i)
        expect(addExpenseButton).toBeTruthy()

        await user.click(addExpenseButton)

        const saveExpense = await screen.findByRole('button', { name: /Save Expense/i })
        expect(saveExpense).toBeTruthy()

        const descriptionInput = screen.getByPlaceholderText(/Description/i)
        const amountInput = screen.getByPlaceholderText(/Amount/i)
        const noteInput = screen.getByPlaceholderText(/Add note/i)
        const date = (screen.getByPlaceholderText(/date/i) as HTMLInputElement).value

        fireEvent.change(descriptionInput, { target: { value: 'Iphone' } })
        fireEvent.change(amountInput, { target: { value: '1000' } })
        fireEvent.change(noteInput, { target: { value: 'Nice' } })

        const form = await screen.findByTestId('test-form')
        fireEvent.submit(form)

        const content = await screen.findByText(/Iphone/i)
        const dateVal = await screen.findByText(date)
        const amount = await screen.findAllByText((content, node) => {
            const hasText = (node: Element | null) => node?.textContent === '$1000'
            const nodeHasText = hasText(node)

            // eslint-disable-line
            // eslint-disable-next-line testing-library/no-node-access
            const childrenDontHaveText = Array.from(node?.children || []).every(
                (child) => !hasText(child)
            )

            return nodeHasText && childrenDontHaveText
        })

        const sign = await screen.findAllByText((content, node) => {
            const hasText = (node: Element | null) => node?.textContent === '$1000'
            const nodeHasText = hasText(node)

            // eslint-disable-line
            // eslint-disable-next-line testing-library/no-node-access
            const childrenDontHaveText = Array.from(node?.children || []).every(
                (child) => !hasText(child)
            )

            return nodeHasText && childrenDontHaveText
        })

        expect(sign[0]).toBeTruthy()
        expect(content).toBeTruthy()
        expect(amount[1]).toBeTruthy()
        expect(dateVal).toBeTruthy()

    })
})