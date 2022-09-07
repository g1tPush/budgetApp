import React from 'react'
import renderer from 'react-test-renderer'
import PageHeader from './PageHeader'
import { BrowserRouter } from 'react-router-dom'

it('renders dashboard', () => {
    const tree = renderer
        .create(
            <BrowserRouter>
                <PageHeader headerType='dashboard' numOfExpenses={1} totalSum={1000} />
            </BrowserRouter>
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})

it('renders create sign', () => {
    const tree = renderer
        .create(<PageHeader headerType='create' />)
        .toJSON()
    expect(tree).toMatchSnapshot()
})

it('renders edit sign', () => {
    const tree = renderer
        .create(<PageHeader headerType='edit' />)
        .toJSON()
    expect(tree).toMatchSnapshot()
})