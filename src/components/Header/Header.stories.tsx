import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Header from './Header'

export default {
    title: 'Components/Main Header',
    component: Header
} as ComponentMeta<typeof Header>

export const SiteHeader: ComponentStory<typeof Header> = () => <Header />