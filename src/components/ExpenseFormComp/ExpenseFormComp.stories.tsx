import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ExpenseFormComp from './ExpenseFormComp'

import { StoreProvider, expenseList } from '../../index'

export default {
    title: 'Expense Form Composition',
    component: ExpenseFormComp
} as ComponentMeta<typeof ExpenseFormComp>

const Template: ComponentStory<typeof ExpenseFormComp> = (args) => <ExpenseFormComp {...args} />

export const CreateComp = Template.bind({})

CreateComp.args = {
    screenType: 'create'
}

CreateComp.decorators = [
    (story) => (
        <StoreProvider value={expenseList}>
            {story()}
        </StoreProvider>
    )
]

export const DeleteComp = Template.bind({})

DeleteComp.args = {
    screenType: 'edit'
}

DeleteComp.decorators = [
    (story) => (
        <StoreProvider value={expenseList}>
            {story()}
        </StoreProvider>
    )
]
