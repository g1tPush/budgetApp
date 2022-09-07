import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TotalSign from './TotalSign'

export default {
    title: 'Components/Header Sign',
    component: TotalSign
} as ComponentMeta<typeof TotalSign>

const Template: ComponentStory<typeof TotalSign> = (args) => <TotalSign {...args} />

export const MainSign = Template.bind({})

MainSign.args = {
    numOfExpenses: 2,
    totalSum: 1500
}

export const Sign = Template.bind({})

Sign.args = {
    title: 'Edit Expense'
}