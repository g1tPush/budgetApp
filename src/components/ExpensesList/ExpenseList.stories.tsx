import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import moment from 'moment'
import ExpenseList from './ExpensesList'

import { StoreProvider, expenseList } from '../../index'

export default {
    title: 'Components/Expense List',
    component: ExpenseList
} as ComponentMeta<typeof ExpenseList>

const Template: ComponentStory<typeof ExpenseList> = (args) => <ExpenseList {...args} />

export const Expenses = Template.bind({})

Expenses.decorators = [
    (story) => (
        <StoreProvider value={expenseList}>
            {story()}
        </StoreProvider>
    )
]

Expenses.args = {
    expensesList: [
        {
            id: '123ew7t23ieuwd',
            content: 'Iphone',
            amount: 1000,
            date: moment(),
            note: 'This is a good choise'
        }
    ]
}