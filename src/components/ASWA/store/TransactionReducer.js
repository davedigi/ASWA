import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import Axios from 'axios';
import { APP_API_URL, APP_API_PORT } from '../../../Hooks/apiContants';
// import { CREATE_TRANSACTION, READ_TRANSACTIONS } from './types'

/* const createTransaction = (transaction, state) => {
   const newTransaction = [...state.transactions, transaction]
   return {
      ...state,
      transaction: newTransaction
   }
} */

export function createTransDB(action) {
   const headers = {
      'Content-Type': 'application/json'
   };

   Axios.post(APP_API_URL + ':' + APP_API_PORT + "/transaction/create", action.payload, { headers })
      .then(function (res) {
         if (res.status === 200) {
            console.log('REDUX CREATE TRANSACTIONS:', res.data)
         }
      })
      .catch(function (error) {
         if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            const message = error.response.data
            console.log('ERROR message WRITING transaction=', message)
         }
         console.log('ERROR message WRITING transaction:', error)
      });
}

export const fetchTrans = createAsyncThunk('read_transaction', async () => {
   const url = APP_API_URL + ":" + APP_API_PORT + "/transaction/read";
   // , { headers: { 'x-access-token': localStorage.getItem(ACCESS_TOKEN_NAME) } })";
   const res = await fetch(url);
   // console.log(res);

   const json = await res.json();

   // console.log('REDUX FETCH-TRANSACTIONS:', json)
   return json
})

export const transactionsSlice = createSlice({
   name: 'transaction',
   initialState: {
      transactions: [],
      status: 'idle',
      error: null
   },
   reducers: {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      create_transactions: (state, action) => {
         // , { headers: { 'x-access-token': localStorage.getItem(ACCESS_TOKEN_NAME) } })";
         // const payload = {
         //    "": ,
         // }
         createTransDB(action);
      },
      read_transactions: (state, action) => {
         // , { headers: { 'x-access-token': localStorage.getItem(ACCESS_TOKEN_NAME) } })";
         Axios.get(APP_API_URL + ':' + APP_API_PORT + "/transaction/read")
            .then(function (res) {
               if (res.status === 200) {
                  console.log('SUCCESS REDUX READ TRANSACTIONS:', res.data)
               }
            })
            .catch(function (error) {
               if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  const message = error.response.data.title
                  console.log('ERROR message reading transaction=', message)
               }
               console.log('ERROR message reading transaction:', error)
            })
      },
      extraReducers: {
         // Add reducers for additional action types here, and handle loading state as needed
         [fetchTrans.fulfilled]: (state, action) => {
            // Add to the state array
            state.transaction.transactions.push(action.payload)
         }
      }
   },
});

export const { create_transaction, read_transactions, extraReducers } = transactionsSlice.actions;
// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const read = boh => dispatch => {
   setTimeout(() => {
      dispatch(read_transactions(1));
   }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTransactions = state => state.transaction.transactions
export const createTransactions = state => state.transaction.transactions

export default transactionsSlice.reducer;

/* export default (state = {}, action) => {
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
*/

