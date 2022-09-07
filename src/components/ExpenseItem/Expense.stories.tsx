import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import moment from 'moment'
import ExpenseItem from './ExpenseItem'

export default {
    title: 'Components/Expense Item',
    component: ExpenseItem
} as ComponentMeta<typeof ExpenseItem>

const Template: ComponentStory<typeof ExpenseItem> = (args) => <ExpenseItem {...args} />

export const Expense = Template.bind({})

Expense.args = {
    id: '123ew7t23ieuwd',
    content: 'Iphone',
    amount: 1000,
    date: moment(),
    note: 'This is a good choise'
}