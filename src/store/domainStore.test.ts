import { ExpensesStore } from './domainStore'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

const fixedDate = moment()

const firstExpense = {
    id: uuidv4(),
    content: 'Iphone',
    date: fixedDate,
    note: 'Good choice',
    amount: 1000
}

const secondExpense = {
    id: uuidv4(),
    content: 'PS5',
    date: fixedDate,
    note: 'Not a good choice',
    amount: 500
}

const createExpense = () => {
    const store = new ExpensesStore()

    store.createExpense(firstExpense)
    store.createExpense(secondExpense)

    return store
}

describe('Domain Store', () => {
    it('creates new expenses', () => {
        const store = createExpense()

        expect(store.expenses.length).toBe(2)
        expect(store.expenses[0]).toEqual(firstExpense)
        expect(store.expenses[1]).toEqual(secondExpense)
    })

    it('update expense', () => {
        const store = createExpense()

        const copyFirstExpense = { ...firstExpense }
        copyFirstExpense.amount = 500
        store.updateExpense(copyFirstExpense)

        expect(store.expenses.length).toBe(2)
        expect(store.expenses[0]).toEqual(copyFirstExpense)
    })

    it('remove expense', () => {
        const store = createExpense()

        store.removeExpense(firstExpense)

        expect(store.expenses.length).toBe(1)
        expect(store.expenses[0]).toEqual(secondExpense)
    })

    it('get expense by id', () => {
        const store = createExpense()

        const expense = store.getExpense(firstExpense.id)

        expect(store.expenses.length).toBe(2)
        expect(store.expenses[0]).toEqual(firstExpense)
        expect(expense).toEqual(firstExpense)
    })

    it('update date', () => {
        const store = createExpense()
        const startDate = moment()
        const endDate = moment().add(7, 'days')
        store.updateDate(startDate, endDate)

        expect(store.startDate).toBe(startDate)
        expect(store.endDate).toBe(endDate)
    })

    it('update type', () => {
        const store = createExpense()
        store.updateType('Amount')

        expect(store.type).toBe('Amount')
    })

    it('update search text', () => {
        const store = createExpense()

        store.updateSearchText('Text')

        expect(store.searchText).toBe('Text')
    })

    it('should return sorted value', () => {
        const store = new ExpensesStore()

        const firstExpense = {
            id: uuidv4(),
            content: 'Iphone',
            date: moment(),
            note: 'Good choice',
            amount: 1000
        }

        const secondExpense = {
            id: uuidv4(),
            content: 'PS5',
            date: moment().add(7, 'days'),
            note: 'Not a good choice',
            amount: 500
        }

        store.createExpense(firstExpense)
        store.createExpense(secondExpense)

        expect(store.expensesList.length).toBe(2)
        expect(store.expensesList[0]).toEqual(secondExpense)
        expect(store.expensesList[1]).toEqual(firstExpense)

        store.updateType('Amount')
        expect(store.expensesList.length).toBe(2)
        expect(store.expensesList[0]).toEqual(firstExpense)
        expect(store.expensesList[1]).toEqual(secondExpense)
    })

    it('should return value by search text', () => {
        const store = createExpense()


        store.updateSearchText(store.expenses[0].content.toUpperCase())
        expect(store.expensesList.length).toBe(1)
        expect(store.expensesList[0]).toEqual(firstExpense)
    })

    it('test by null start and end date', () => {
        const store = createExpense()

        expect(store.expensesList.length).toBe(2)
        expect(store.expensesList[0]).toEqual(firstExpense)
        expect(store.expensesList[1]).toEqual(secondExpense)
    })

    it('test by start date and null end date', () => {
        const store = createExpense()

        store.updateDate(moment().subtract(1, 'days'), null)

        expect(store.expensesList.length).toBe(2)
        expect(store.expensesList[0]).toEqual(firstExpense)
        expect(store.expensesList[1]).toEqual(secondExpense)
    })

    it('test by null date and end date', () => {
        const store = createExpense()

        store.updateDate(null, moment().add(1, 'days'), )

        expect(store.expensesList.length).toBe(2)
        expect(store.expensesList[0]).toEqual(firstExpense)
        expect(store.expensesList[1]).toEqual(secondExpense)
    })
    
    it('test by start date and end date', () => {
        const store = createExpense()

        store.updateDate(moment().subtract(1, 'days'), moment().add(1, 'days'))

        expect(store.expensesList.length).toBe(2)
        expect(store.expensesList[0]).toEqual(firstExpense)
        expect(store.expensesList[1]).toEqual(secondExpense)
    })
})