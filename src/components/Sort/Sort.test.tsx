import React from 'react'
import renderer from 'react-test-renderer'
import Sort from './Sort'
import { StoreProvider } from '../../index'
import { ExpensesStore } from '../../store/domainStore'

it('renders correctly', () => {
    const tree = renderer
        .create(
            <StoreProvider value={new ExpensesStore()}>
                <Sort />
            </StoreProvider>
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})