import React from 'react'
import Button from '../Button/Button'
import TotalSign from '../TotalSign/TotalSign'
import { Link } from 'react-router-dom'

interface PageHeaderProsp {
    /**
     * The header type
     */
    headerType: 'dashboard' | 'create' | 'edit',
    numOfExpenses?: number,
    totalSum?: number
}

const PageHeader: React.FC<PageHeaderProsp> = ({ headerType, numOfExpenses, totalSum }) => {
    if (headerType === 'dashboard') {
        return (
            <>
                <TotalSign numOfExpenses={numOfExpenses} totalSum={totalSum} />
                <Link to='/create' data-testid='addExpense'>
                    <Button label='Add Expense' style={{ marginTop: '20px' }} />
                </Link>
            </>
        )
    } else if (headerType === 'create') {
        return (
            <TotalSign title={'Create Expense'} />
        )
    } else {
        return (
            <TotalSign title={'Edit Expense'} />
        )
    }
}

export default PageHeader