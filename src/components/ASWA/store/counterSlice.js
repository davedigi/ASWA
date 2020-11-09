import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import { APP_API_URL, APP_API_PORT } from '../../../Hooks/apiContants';
import Axios from 'axios'


export const fetchTrans = createAsyncThunk('read_transaction', async () => {
  const url = APP_API_URL + ":" + APP_API_PORT + "/transaction/read";
  // , { headers: { 'x-access-token': localStorage.getItem(ACCESS_TOKEN_NAME) } })";
  const res = await fetch(url);
  // console.log(res);

  const json = await res.json();
  console.log('REDUX FETCH-TRANSACTIONS:', json)
  return json
})
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    transactions: [],
    status: 'idle',
    error: null,
    value: 0,
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    read_transactions: (state, action) => {

      // , { headers: { 'x-access-token': localStorage.getItem(ACCESS_TOKEN_NAME) } })";
      Axios.get(APP_API_URL + ':' + APP_API_PORT + "/transaction/read")
        .then(function (res) {
          if (res.status === 200) {
            // console.log('REDUX READ TRANSACTIONS:', res.data)
            // state.transactions = res.data
          }
        })
        .catch(function (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            const message = error.response.data.title
            console.log('err message reading transaction=', message)
          }
          console.log('err message reading transaction:', error)
        })

      // state.transactions = [
      // {
      //   "_id": "5fa35d129d3c04762c9de5a0",
      //   "price": "2765",
      //   "buyer": "2",
      //   "supplier": "{id:2,legalname:'Scala Florealll',city:'Pozzallo(RG)'}",
      //   "product": "{id:1,code:'G127',descr:'bonsai Milanese',size:'gambo lungo',imageurl:'/gerbere-milanesi.jpg',minprice:1020,suggestedprice:1267}",
      //   "state": "CANCELLED",
      //   "createdAt": "2020-11-05T02:01:54.231Z",
      //   "__v": 0
      // },
      // {
      //   "_id": "5fa04d02f908423a904e9197",
      //   "price": "2098",
      //   "buyer": "1",
      //   "supplier": "{id:1,legalname:'Floreal Garofalo',city:'Pozzallo(RG)'}",
      //   "product": "{id:1,code:'G127',descr:'Gerbere Milanesi ',size:'gambo lungo',imageurl:'/gerbere-milanesi.jpg',minprice:1020,suggestedprice:1267}",
      //   "state": "REGISTERED",
      //   "createdAt": "2020-11-02T18:16:34.262Z",
      //   "__v": 0
      // },
      // {
      //   "_id": "5f9f3a77a741db33a4a4e48d",
      //   "price": "2098",
      //   "buyer": "1",
      //   "supplier": "{id:1,legalname:'Floreal Garofalo',city:'Pozzallo(RG)'}",
      //   "product": "{id:1,code:'G127',descr:'Gerbere Milanesi ',size:'gambo lungo',imageurl:'/gerbere-milanesi.jpg',minprice:1020,suggestedprice:1267}",
      //   "state": "REGISTERED",
      //   "createdAt": "2020-11-01T22:45:11.604Z",
      //   "__v": 0
      // },
      // {
      //   "_id": "5f9f3791b225c85ac86d26f2",
      //   "price": "2580",
      //   "buyer": "666",
      //   "supplier": "{id:1,legalname:'Floreal Garofalo',city:'Pozzallo(RG)'}",
      //   "product": "{id:1,code:'G127',descr:'Gerbere Milanesi ',size:'gambo lungo',imageurl:'/gerbere-milanesi.jpg',minprice:1020,suggestedprice:1267}",
      //   "state": "REGISTERED",
      //   "createdAt": "2020-11-01T22:32:49.817Z",
      //   "__v": 0
      // }
      // ]
      // console.log('read transactions:', state)
      // ciccio().then(res)
      // console.log(state.transactions)
    },
    extraReducers: {
      // Add reducers for additional action types here, and handle loading state as needed
      [fetchTrans.fulfilled]: (state, action) => {
        // Add user to the state array
        state.transactions.push(action.payload)
        console.log('extraReducers fetchTrans.fulfilled',state,action)
      }
    }
  },
});

export const { increment, decrement, incrementByAmount, read_transactions,extraReducers } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};
export const read = boh => dispatch => {
  setTimeout(() => {
    dispatch(read_transactions(1));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value;
export const selectTransactions = state => state.counter.transactions;

export default counterSlice.reducer;

