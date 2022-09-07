import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PageHeader from './PageHeader'

export default {
    title: 'Page Header',
    component: PageHeader
} as ComponentMeta<typeof PageHeader>

const Template: ComponentStory<typeof PageHeader> = (args) => <PageHeader {...args} />

export const Header = Template.bind({})

Header.args = {
    headerType: 'dashboard'
}
