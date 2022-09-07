import React, { createContext, useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ExpensesStore } from './store/domainStore'
import { BrowserRouter } from 'react-router-dom'

export const StoreContext = createContext<ExpensesStore>({} as ExpensesStore);
export const StoreProvider = StoreContext.Provider

export const expenseList = new ExpensesStore()

export const useStore = (): typeof expenseList => useContext(StoreContext)

const root = ReactDOM.createRoot(
  (document.getElementById('root') || document.createElement('div')) as HTMLElement
)

const FullApp = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <StoreProvider value={expenseList}>
          <App />
        </StoreProvider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

root.render(<FullApp />)