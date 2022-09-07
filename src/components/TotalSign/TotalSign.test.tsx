import React from 'react'
import TotalSign from './TotalSign'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

it('test total sign results', () => {
    const { rerender } = render(<TotalSign numOfExpenses={1} totalSum={1000} />)

    screen.getByText((content, node) => {
        const hasText = (node: Element | null) => node?.textContent === 'Viewing 1 expense totalling $1000'
        const nodeHasText = hasText(node)

        // eslint-disable-line
        // eslint-disable-next-line testing-library/no-node-access
        const childrenDontHaveText = Array.from(node?.children || []).every(
            (child) => !hasText(child)
        )

        return nodeHasText && childrenDontHaveText
    })

    rerender(<TotalSign title={'Create Expense'} />)
    const content = screen.getByText(/Create Expense/i)
    expect(content).toBeTruthy()
})