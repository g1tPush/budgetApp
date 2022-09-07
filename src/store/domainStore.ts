import { makeObservable, observable, makeAutoObservable } from 'mobx'
import moment from 'moment'
import { IExpense, SortType, DateType } from '../types/types'

// {
//     id: '123ew7t23ieuwd',
//     content: 'Iphone',
//     amount: 1000,
//     date: moment(),
//     note: 'This is a good choise'
// }

export class ExpensesStore {
    expenses: Expense[] = []
    searchText: string = ''
    type: SortType = 'Date'
    startDate: DateType = null
    endDate: DateType = null
    filterredArr: Expense[] = []

    constructor() {
        makeObservable(this, {
            expenses: observable,
            searchText: observable,
            type: observable,
            startDate: observable,
            endDate: observable,
            filterredArr: observable
        })
    }

    get expensesList() {
        return this.expenses.slice().filter((item) => {
            if (item.date) {
                const date = moment(item.date).format('MM-DD-YYYY')
                if (this.startDate === null && this.endDate === null) {
                    return item
                } else if (this.startDate !== null && this.endDate !== null) {
                    return new Date(date) <= new Date(this.endDate.format('MM-DD-YYYY')) && new Date(date) >= new Date(this.startDate.format('MM-DD-YYYY'))
                } else if (this.startDate === null) {
                    return new Date(date) <= new Date(this.endDate?.format('MM-DD-YYYY') || '')
                } else if (this.endDate === null) {
                    return new Date(date) >= new Date(this.startDate?.format('MM-DD-YYYY') || '')
                }
            }
            return 1
        }).filter((item) => {
            return item.content.toLowerCase().includes(this.searchText.toLowerCase())
        }).sort((a, b) => {
            if (b.date && a.date && this.type === 'Date') {
                return b.date?.valueOf() - a.date?.valueOf()
            } else if (this.type === 'Amount') {
                return +(b.amount) - +(a.amount)
            }
            return 1
        })
    }

    updateDate(startDate: DateType, endDate: DateType) {
        this.startDate = startDate
        this.endDate = endDate
    }

    updateType(type: 'Date' | 'Amount') {
        this.type = type
    }

    updateSearchText(text: string) {
        this.searchText = text
    }

    createExpense(expense: IExpense) {
        this.expenses.push(new Expense(expense))
        return expense
    }

    updateExpense(expense: IExpense) {
        let index = this.expenses.findIndex(el => {
            return el.id === expense.id
        })

        this.expenses[index] = expense
    }

    removeExpense(expense: Expense | undefined) {
        if (expense) {
            const index = this.expenses.findIndex((el) => {
                return el.id === expense.id
            })
            this.expenses.splice(index, 1)
        }
    }

    getExpense(expenseId: string | undefined) {
        if (expenseId === undefined) {
            return
        }
        return this.expenses.slice().find(el => {
            return el.id === expenseId
        })
    }
}

export class Expense {
    id: string | null = null
    content: string = ''
    date: DateType = null
    note: string;
    amount: number = 0

    constructor(store: IExpense) {
        makeAutoObservable(this, {
            id: false,
            content: false,
            date: false,
            amount: false
        })


        this.id = store.id
        this.amount = store.amount
        this.content = store.content
        this.note = store.note
        this.date = store.date
    }
}