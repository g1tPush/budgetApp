/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Input from '../Input/Input'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import moment from 'moment'
import { DateType } from '../../types/types'
import Button from '../Button/Button'
import styled from 'styled-components'
import { useStore } from '../../index'
import { useNavigate, useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import './expenseForm.css'

interface ExpenseFormProps {
    /**
     * Does this button delete anything?
     */
    formType: 'create' | 'edit'
}

const Form = styled.form``

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-bottom: 15px;
    gap: 15px;
`

const Textarea = styled.textarea`
    padding: 10px;
    height: 50px;
    margin-bottom: 15px;
    box-sizing: border-box;
    width: 100%;
    resize: vertical;
    min-height: 40px;
`

const ExpenseForm: React.FC<ExpenseFormProps> = ({ formType }) => {
    const navigate = useNavigate()
    const params = useParams()
    const expenses = useStore()
    const expense = expenses.getExpense(params.id)

    const [desc, setDesc] = React.useState(expense?.content || '')
    const [amount, setAmount] = React.useState(expense?.amount || '')
    const [note, setNote] = React.useState(expense?.note || '')

    const [date, setDate] = React.useState<DateType>(moment())
    const [focused, setFocused] = React.useState<boolean>(false)

    const expenseAction = async (e) => {
        e.preventDefault()

        if (formType === 'edit' && params.id) {
            await expenses.updateExpense({
                id: params.id,
                content: desc,
                amount: +amount,
                date: date,
                note
            })
        } else {
            await expenses.createExpense({
                id: uuidv4(),
                content: desc,
                amount: +amount,
                date,
                note
            })
        }

        navigate(`/`)
    }

    const deleteExpense = async () => {
        await expenses.removeExpense(expense)

        navigate(`/`)
    }

    useEffect(() => {
        if (!expense && params.id) {
            navigate('/')
        }

    }, [])

    return (
        <Form onSubmit={expenseAction} data-testid='test-form'>
            <Div>
                <Input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder='Description' required data-testid='description' />
                <Input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Amount' required pattern='[0-9.]+' data-testid='amount' />
                <SingleDatePicker
                    date={date}
                    onDateChange={(date) => setDate(date)}
                    focused={focused}
                    displayFormat={() => "DD-MM-YYYY"}
                    onFocusChange={({ focused }) => setFocused(focused)}
                    isOutsideRange={() => false}
                    id="date"
                    numberOfMonths={1}
                />
                <Textarea name="note"
                    value={note} onChange={(e) => setNote(e.target.value)} placeholder='Add note' data-testid='note'
                />
            </Div>
            <Button
                label='Save Expense'
                type='submit'
            />
            {formType === 'edit'
                ?
                <Button
                    deleteButton
                    style={{ marginTop: '15px' }}
                    label='Remove Expense'
                    data-testid='removeExpense'
                    onClick={async () => {
                        await deleteExpense()
                    }}
                />
                :
                null
            }
        </Form>
    )
}

export default ExpenseForm