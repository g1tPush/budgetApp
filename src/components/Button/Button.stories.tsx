import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './Button'

export default {
    title: 'Components/Button',
    component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const AddButton = Template.bind({})

AddButton.args = {
    label: 'Add Expense'
}

export const DeleteButton = Template.bind({})

DeleteButton.args = {
    deleteButton: true,
    label: 'Remove Expense'
}