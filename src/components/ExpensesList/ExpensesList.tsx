import React from 'react'
import { IExpense } from '../../types/types'
import styled from 'styled-components'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import { Link } from 'react-router-dom'

interface ExpensesProps {
    /**
     * Expenses
     */
    expensesList: IExpense[] | []
}

const ListHeader = styled.div`
    background: #f7f7f7;
    border: 1px solid #e5e5e5;
    color: #666;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 0px;
`

const ListBody = styled.div`
    align-items: center;
    text-align: center;
    color: #666;
    justify-content: center;
`

const Span = styled.span`
    display: block;
    padding: 15px;
    border: 1px solid #e5e5e5;
    border-top: 0;
    text-decoration: none;
`

const ExpenseList: React.FC<ExpensesProps> = ({ expensesList = [] }) => {
    return (
        <div>
            <ListHeader>
                <span>
                    Expenses
                </span>
            </ListHeader>
            <ListBody id='expense-list' data-testid='expenseList'>
                {
                    expensesList.length === 0
                        ?
                        <Span>No expenses</Span>
                        :
                        expensesList.map((expense) => {
                            return (
                                <Link to={`edit/${expense.id}`} key={expense.id}>
                                    <ExpenseItem {...expense} />
                                </Link>
                            )
                        })

                }
            </ListBody>
        </div>
    )
}

export default ExpenseList