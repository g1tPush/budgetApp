import React from 'react'
import { Container } from '../../shared/global'
import PageHeader from '../PageHeader/PageHeader'
import ExpenseForm from '../ExpenseForm/ExpenseForm'
import { Wrap } from '../../shared/global'

interface ExpenseFormCompProps {
    /**
     * Does this button delete anything?
     */
    screenType: 'edit' | 'create'
}


const ExpenseFormComp: React.FC<ExpenseFormCompProps> = ({ screenType }) => {
    return (
        <>
            <Wrap>
                <Container>
                    <PageHeader headerType={screenType} />
                </Container>
            </Wrap>
            <Container style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <ExpenseForm formType={screenType} />
            </Container>
        </>
    )
}

export default ExpenseFormComp