/// <reference types="cypress" />

describe('App test', () => {
    it('test app', () => {
        // test expense creation
        cy.visit('/')

        cy.get('[data-testid="addExpense"]').click()

        cy.get('[data-testid="description"]').type('Iphone')
        cy.get('#date').clear().type('06-09-2022')
        cy.get('[data-testid="amount"]').type('1000')
        cy.get('[data-testid="note"]').type('Great')

        cy.get('[data-testid="test-form"]').submit()

        cy.contains('Iphone')
        cy.contains('06-09-2022')
        cy.get('h3').contains('$1000')
        cy.contains('Viewing 1 expense totalling $1000')

        cy.contains('Add Expense').click()

        cy.get('[data-testid="description"]').type('PS5')
        cy.get('#date').clear().type('09-09-2022')
        cy.get('[data-testid="amount"]').type('500')
        cy.get('[data-testid="note"]').type('Ok')

        cy.get('[data-testid="test-form"]').submit()

        cy.contains('PS5')
        cy.contains('09-09-2022')
        cy.get('h3').contains('$500')
        cy.contains('Viewing 2 expense totalling $1500')

        // test select filtering
        cy.get('[data-testid="expenseList"] a')
            .should(($items) => {
                expect($items).to.have.length(2)
                expect($items.find('[data-testid="content"]')[0]).to.contain('PS5')
                expect($items.find('[data-testid="content"]')[1]).to.contain('Iphone')

            })

        cy.get('select').select('Amount')

        cy.get('[data-testid="expenseList"] a')
            .should(($items) => {
                expect($items).to.have.length(2)
                expect($items.find('[data-testid="content"]')[0]).to.contain('Iphone')
                expect($items.find('[data-testid="content"]')[1]).to.contain('PS5')
            })

        cy.get('select').select('Date')

        // test search filtering
        cy.get('input[placeholder="Search Expenses"]').type('Iphone')

        cy.get('[data-testid="expenseList"]')
            .should(($items) => {
                expect($items).to.have.length(1)
                expect($items.find('[data-testid="content"]')[0]).to.contain('Iphone')
            })

        cy.contains('Viewing 1 expense totalling $1000')

        cy.get('input').first().clear()

        cy.contains('Viewing 2 expense totalling $1500')


        // test date filtering
        cy.get('input[placeholder="Start Date"]').type('06-09-2022')
        cy.get('input[placeholder="End Date"]').type('09-09-2022')

        cy.get('[data-testid="expenseList"] a')
            .should(($items) => {
                expect($items).to.have.length(2)
                expect($items.find('[data-testid="content"]')[0]).to.contain('PS5')
                expect($items.find('[data-testid="content"]')[1]).to.contain('Iphone')
            })

        cy.contains('Viewing 2 expense totalling $1500')

        cy.get('input[placeholder="Start Date"]').clear().type('07-09-2022')

        cy.get('[data-testid="expenseList"] a')
            .should(($items) => {
                expect($items).to.have.length(1)
                expect($items.find('[data-testid="content"]')[0]).to.contain('PS5')
            })

        cy.contains('Viewing 1 expense totalling $500')

        cy.get('input[placeholder="Start Date"]').clear().type('06-09-2022')
        cy.get('input[placeholder="End Date"]').clear().type('08-09-2022')

        cy.get('[data-testid="expenseList"] a')
            .should(($items) => {
                expect($items).to.have.length(1)
                expect($items.find('[data-testid="content"]')[0]).to.contain('Iphone')
            })

        cy.contains('Viewing 1 expense totalling $1000')

        cy.get('.DateRangePickerInput_clearDates').click()

        cy.get('[data-testid="expenseList"] a')
            .should(($items) => {
                expect($items).to.have.length(2)
                expect($items.find('[data-testid="content"]')[0]).to.contain('PS5')
                expect($items.find('[data-testid="content"]')[1]).to.contain('Iphone')
            })

        cy.contains('Viewing 2 expense totalling $1500')

        // test change expese
        cy.get('[data-testid="expenseList"] a').first().click()
        cy.get('input[placeholder="Description"]').clear().type('Xbox')

        cy.contains('Save Expense').click()

        cy.get('[data-testid="expenseList"] a')
            .should(($items) => {
                expect($items).to.have.length(2)
                expect($items.find('[data-testid="content"]')[0]).to.contain('Xbox')
                expect($items.find('[data-testid="content"]')[1]).to.contain('Iphone')
            })

        // delete expense
        cy.get('[data-testid="expenseList"] a').first().click()

        cy.get('[data-testid="removeExpense"]').click()

        cy.get('[data-testid="expenseList"]')
            .should(($items) => {
                expect($items).to.have.length(1)
                expect($items.find('[data-testid="content"]')[0]).to.contain('Iphone')
            })

        cy.contains('Viewing 1 expense totalling $1000')
    })
})