import React from 'react'
import renderer from 'react-test-renderer'
import Header from './Header'
import { BrowserRouter } from 'react-router-dom'

it('renders correctly', () => {
    const tree = renderer
        .create(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})