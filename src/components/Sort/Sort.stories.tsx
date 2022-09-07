import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'

import Sort from './Sort'

export default {
    title: 'Sort Header',
    component: Sort
} as ComponentMeta<typeof Sort>

export const SortElement: ComponentStory<typeof Sort> = (args) => <Sort />
