import React from 'react'
import renderer from 'react-test-renderer'
import ExpenseFormComp from './ExpenseFormComp'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from '../../index'
import { ExpensesStore } from '../../store/domainStore'

jest
    .useFakeTimers()
    .setSystemTime(new Date('01-01-2022'))

it('renders edit form', () => {
    const tree = renderer
        .create(
            <StoreProvider value={new ExpensesStore()}>
                <BrowserRouter>
                    <ExpenseFormComp screenType='edit' />
                </BrowserRouter>
            </StoreProvider>
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})

it('renders create form', () => {
    const tree = renderer
        .create(
            <StoreProvider value={new ExpensesStore()}>
                <BrowserRouter>
                    <ExpenseFormComp screenType='create' />
                </BrowserRouter>
            </StoreProvider>
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})