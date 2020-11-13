import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice'

import {
  read_transactions,
  selectTransactions,
  fetchTrans
} from './TransactionReducer'

import styles from './Counter.module.css';
import ListTransactionsTable from '../ListTransactionsTable';

export function Counter() {
  const count = useSelector(selectCount);
  const transactions = useSelector(selectTransactions);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const [tr2, setTr2] = useState(transactions)

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
  console.log('RENDER ',tr2.data)
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        {tr2.data && (
          Object.keys(tr2.data).length === 0
          ? <p>No results</p>
          : <div>{/* There are {Object.keys(tr2.data).length} results. */}
              
                <ListTransactionsTable items={transactions} reduxTrans={tr2.data} />
            </div>
        )}
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatchReadTrans()}
        >
          READ Trans
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  )
}
