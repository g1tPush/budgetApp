import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { StoreProvider, expenseList } from '../../index'

import { withRouter } from 'storybook-addon-react-router-v6'

import ExpenseForm from './ExpenseForm'

export default {
    title: 'Expense Form',
    component: ExpenseForm,
    decorators: [
        (story) => (
            <StoreProvider value={expenseList}>
                {story()}
            </StoreProvider>
        )
    ]
} as ComponentMeta<typeof ExpenseForm>

const Template: ComponentStory<typeof ExpenseForm> = (args) => <ExpenseForm {...args} />

export const ExpenseCreate = Template.bind({})

ExpenseCreate.args = {
    formType: 'create'
}

export const ExpenseEdit = Template.bind({})

ExpenseEdit.args = {
    formType: 'edit'
}