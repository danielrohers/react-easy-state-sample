import { store } from 'react-easy-state';

const counter = {
  value: 0,

  increment() {
    this.value += 1;
  },

  decrement() {
    this.value -= 1;
  }
};

export default store(counter);
