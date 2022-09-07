import React from 'react'
import styled from 'styled-components'

interface TotalSignProps {
    /**
     * Title
     */
    title?: string
    /**
     * Number of all expenses
     */
    numOfExpenses?: number;
    /**
     * Sum of expenses
     */
    totalSum?: number;
}

const ExpensesSign = styled.p`
    color: black;
    font-size: 40px;
    margin-top: 0;
    @media (max-width: 800px) {
        font-size: 30px;
    }
    @media (max-width: 650px) {
        font-size: 25px;
    }
    @media (max-width: 500px) {
        font-size: 20px;
    }
`

const TotalSign: React.FC<TotalSignProps> = ({ title, numOfExpenses = 0, totalSum = 0 }) => {
    if (title) {
        return (
            <ExpensesSign>
                {title}
            </ExpensesSign>
        )
    }

    return (
        <ExpensesSign>
            Viewing <b>{numOfExpenses}</b> expense totalling <b>${totalSum}</b>
        </ExpensesSign>
    )
}

export default TotalSign