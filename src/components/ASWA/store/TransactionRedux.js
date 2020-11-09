import React from 'react'
import ListTransactionsTable from '../ListTransactionsTable'
import TransactionReducer from './TransactionReducer'
import { CREATE_TRANSACTION, READ_TRANSACTIONS } from './types'
import { useSelector, useDispatch } from 'react-redux'
import { Counter } from './Counter'

export const Transaction = () => {
   /*
   const users = useCrud("http://jsonplaceholder.typicode.com/users")
   const initialState = { users: users }
   
   const [state, dispatch] = React.useReducer(userReducer, initialState)
   */
   const state = useSelector(state => state.transaction)
   const dispatch = useDispatch()

   let onUpdateHandler = state => dispatch(TransactionReducer(state,{ type: READ_TRANSACTIONS, payload: null }))
   // dispatch(TransactionReducer(state,{ type: READ_TRANSACTIONS, payload: null }))
   return <>
      {/* <ListTransactionsTable
         item={state}
         onUpdate={onUpdateHandler}
         onAdd={(trans) => dispatch(TransactionReducer({ type: CREATE_TRANSACTION, payload: trans }))}
      // onChange={(id) => dispatch(changeTrans(id))}
      /> */}

   </>
}



