import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
  read_transactions,
  selectTransactions,
  fetchTrans
} from './counterSlice';
import styles from './Counter.module.css';
import ListTransactionsTable from '../ListTransactionsTable';

export function Counter() {
  const count = useSelector(selectCount);
  const transactions = useSelector(selectTransactions);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
dispatch(fetchTrans())
  return (
    <div>
      <ListTransactionsTable reduxTrans={transactions}/>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        {transactions && (
          Object.keys(transactions).length === 0
            ? <p>No results</p>
            : <div>There are {Object.keys(transactions).length} results.
              {

                // arr.map((item) => (
                //   <span key={item[1].id} className="block" >
                //     {item[1].name}
                //   </span>
                // ))
              }
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
          onClick={() => dispatch(read_transactions(Number(incrementAmount) || 0))}
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
  );
}
