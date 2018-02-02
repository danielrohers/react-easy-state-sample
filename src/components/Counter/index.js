import React from 'react';
import { view } from 'react-easy-state';

import './index.css';

import CounterStore from '../../stores/counter';

const Counter = () => {
  const { value, increment, decrement } = CounterStore;
  return (
    <section className="Counter">
      <span className="Counter-value">Counter: {value}</span>

      <button className="Counter-action" onClick={increment}>Increment</button>

      <button className="Counter-action" onClick={decrement}>Decrement</button>
    </section>
  );
};

export default view(Counter);
