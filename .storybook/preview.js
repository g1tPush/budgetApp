import React from 'react'
import { GlobalStyle } from '../src/shared/global'
import { MemoryRouter } from 'react-router'
import { addDecorator } from '@storybook/react'
import { StoreProvider, expenseList } from '../src/index'

export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
]

addDecorator(story => (
  <StoreProvider value={expenseList}>
    <MemoryRouter initialEntries={['/', '/edit', '/create', '/edit:id']}>
      {story()}
    </MemoryRouter>
  </StoreProvider>
))

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}