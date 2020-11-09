import Axios from 'axios'
import { CREATE_TRANSACTION, READ_TRANSACTIONS } from './types'
import { APP_API_PORT, APP_API_URL } from '../../../Hooks/apiContants'

const createTransaction = (transaction, state) => {
   const newTransaction = [...state.transactions, transaction]
   return {
      ...state,
      transaction: newTransaction
   }
}

const getAsyncTransactions = () => {
   /*    setTimeout(() => {
            dispatch(TransactionReducer({ type: READ_TRANSACTIONS, payload: null }))
         }, 1000);
         return json
         (async () => {
            const res = await fetch(url);
            setUsers(await res.json());
         })();
         */
}

const readTransactions = (type, state) => {

   // , { headers: { 'x-access-token': localStorage.getItem(ACCESS_TOKEN_NAME) } })";
   Axios.get(APP_API_URL + ':' + APP_API_PORT + "/transaction/read")
      .then(function (res) {
         if (res.status === 200) {
            const Transactions = res.json()
            console.log('REDUX READ TRANSACTIONS:', res.json())

            return {
               ...state,
               transactions: Transactions
            }
         }
      })
      .catch(function (error) {
         if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            const message = error.response.data.title
         }
         console.log('err message reading transaction=')
      })
}

export default (state = {}, action) => {
   switch (action.type) {
      case CREATE_TRANSACTION:
         return createTransaction(action.payload, state);
      case READ_TRANSACTIONS:
         console.log('CHIAMATA DISPATCH READ_TRANSACTIONS', state)
         return readTransactions(action.type, state);
      default:
         return state;

   }
}