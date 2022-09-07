/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useEffect } from 'react'
import 'react-dates/initialize'
import { DateRangePicker, FocusedInputShape } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import Input from '../Input/Input'
import styled from 'styled-components'
import { useStore } from '../../index'
import { observer } from 'mobx-react-lite'
import './sort.css'

const Wrap = styled.div`
    display: flex;
    gap: 15px;
    @media (max-width: 750px) {
        gap: 10px;
        flex-flow: row wrap;
    }
`

const Select = styled.select`
    height: 50px;
    width: 100px;
    background-color: white;
`

const Sort = () => {
    const expenses = useStore()

    const [text, setText] = React.useState('')
    const startDate = expenses.startDate
    const endDate = expenses.endDate
    const [focusedInput, setFocusedInput] = React.useState<FocusedInputShape | null>(null)

    const update = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            expenses.updateSearchText(text)
        }, 750)

        return () => {
            clearTimeout(timer)
        }
    }, [text])

    return (
        <Wrap>
            <Input value={text} type='text' placeholder='Search Expenses' onChange={update} />
            <Select value={expenses.type} onChange={(e) => {
                expenses.updateType(e.target.value === 'Date' ? 'Date' : 'Amount')
            }}>
                <option value="Date">Date</option>
                <option value="Amount">Amount</option>
            </Select>
            <DateRangePicker
                startDate={startDate}
                isOutsideRange={() => false}
                startDateId='start-date'
                endDate={endDate}
                displayFormat={() => "DD-MM-YYYY"}
                endDateId='end-date'
                onDatesChange={async ({ startDate, endDate }) => {
                    await expenses.updateDate(startDate, endDate)
                }}
                focusedInput={focusedInput}
                onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
                showClearDates={true}
                numberOfMonths={1}
            />
        </Wrap>
    )
}

export default observer(Sort)