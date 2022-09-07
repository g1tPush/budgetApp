import React from 'react'
import PageHeader from './PageHeader/PageHeader'
import Sort from './Sort/Sort'
import ExpenseList from './ExpensesList/ExpensesList'
import { Wrap, Container } from '../shared/global'
import { useStore } from '../index'
import { observer } from 'mobx-react-lite'

const MainPage = () => {
    const expenses = useStore()
    let expensesList = expenses.expensesList

    return (
        <>
            <Wrap>
                <Container>
                    <PageHeader
                        headerType='dashboard'
                        numOfExpenses={expensesList.length}
                        totalSum={expensesList.reduce((item, prev) => item + prev.amount, 0)}
                    />
                </Container>
            </Wrap>
            <Container style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <Sort />
                <ExpenseList expensesList={expensesList} />
            </Container>
        </>
    )
}

export default observer(MainPage)