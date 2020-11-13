import React, { useState } from 'react'
import ListTransactionsTable from '../ListTransactionsTable'
import { CREATE_TRANSACTION, READ_TRANSACTIONS } from './types'
import { useSelector, useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'

import TransactionReducer, {
   selectTransactions,
   fetchTrans
} from './TransactionReducer'


export const TransactionRedux = () => {
   const transactions = useSelector(selectTransactions);

   const dispatch = useDispatch();
   const [tr2, setTr2] = useState(transactions)
   /*
   const users = useCrud("http://jsonplaceholder.typicode.com/users")
   const initialState = { users: users }
   
   const [state, dispatch] = React.useReducer(userReducer, initialState)
   */
   // dispatch(TransactionReducer(state,{ type: READ_TRANSACTIONS, payload: null }))

   const dispatchReadTrans = async () => {
      dispatch(fetchTrans())
         .then(unwrapResult)
         .then(result => {
            console.log('PRONTO DA RENDERIZZARE res:', result);
            setTr2(result)

            return result.data;
         })
         .catch(serializedError => {
            console.log('error!!:', serializedError);
         })
   }

   React.useEffect(() => {
      dispatchReadTrans()
      console.log('chiamato USEEFEECT tr2:', tr2)
   }, [])
   console.log('RENDER ', tr2.data)

   return (
      <>
         <div className="">
            {tr2.data && (
               Object.keys(tr2.data).length === 0
                  ? <p>No results</p>
                  : <div>{/* There are {Object.keys(tr2.data).length} results. */}

                     <ListTransactionsTable items={transactions} reduxTrans={tr2.data} />
                  </div>
            )}
         </div>
      </>
   )
}
export default TransactionRedux