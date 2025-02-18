import { createStore } from 'redux';

const initialState = { value: '' };

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'APPEND_VALUE':
      return { ...state, value: state.value + action.payload };
    case 'CLEAR':
      return { ...state, value: '' };
    case 'CALCULATE':
      try {
        return { ...state, value: eval(state.value).toString() };
      } catch {
        return { ...state, value: 'Error' };
      }
    default:
      return state;
  }
};

export const store = createStore(calculatorReducer);