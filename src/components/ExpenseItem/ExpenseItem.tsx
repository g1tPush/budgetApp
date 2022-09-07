import React from 'react'
import styled from 'styled-components'
import { IExpense } from '../../types/types'

const ExpenseWrapper = styled.span`
    display: flex;
    justify-content: space-between;
    cursor: pointer; 
    padding: 20px 15px;
    border: 1px solid #e5e5e5;
    color: black;
    text-decoration: none; 
    &:hover {
        background: #f7f7f7;
    }
`

const Content = styled.span`
    margin-bottom: 10px;
`

const ExpenseInfo = styled.div`
    display: flex;
    text-decoration: none; 
    align-items: self-start;
    flex-direction: column;
`

const ExpenseAmount = styled.h3`
    margin: auto 0;
`

const ExpenseItem: React.FC<IExpense> = ({ id, content, date, amount, note }) => {
    return (
        <ExpenseWrapper>
            <ExpenseInfo>
                <Content data-testid='content'>{content}</Content>
                <span>{date?.format('DD-MM-YYYY')}</span>
            </ExpenseInfo>
            <ExpenseAmount>${amount}</ExpenseAmount>
        </ExpenseWrapper>
    )
}

export default ExpenseItem