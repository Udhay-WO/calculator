import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Calculator.css';

const Calculator = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.value);

  return (
    <div className="calculator">
      <input type="text" value={value} readOnly />
      <div className="buttons">
        <button onClick={() => dispatch({ type: 'APPEND_VALUE', payload: '1' })}>1</button>
        <button onClick={() => dispatch({ type: 'APPEND_VALUE', payload: '2' })}>2</button>
        <button onClick={() => dispatch({ type: 'APPEND_VALUE', payload: '3' })}>3</button>
        <button onClick={() => dispatch({ type: 'APPEND_VALUE', payload: '+' })}>+</button>
        <button onClick={() => dispatch({ type: 'APPEND_VALUE', payload: '4' })}>4</button>
        <button onClick={() => dispatch({ type: 'APPEND_VALUE', payload: '5' })}>5</button>
        <button onClick={() => dispatch({ type: 'APPEND_VALUE', payload: '6' })}>6</button>
        <button onClick={() => dispatch({ type: 'APPEND_VALUE', payload: '-' })}>-</button>
        <button onClick={() => dispatch({ type: 'APPEND_VALUE', payload: '7' })}>7</button>
        <button onClick={() => dispatch({ type: 'APPEND_VALUE', payload: '8' })}>8</button>
        <button onClick={() => dispatch({ type: 'APPEND_VALUE', payload: '9' })}>9</button>
        <button onClick={() => dispatch({ type: 'APPEND_VALUE', payload: '*' })}>*</button>
        <button onClick={() => dispatch({ type: 'APPEND_VALUE', payload: '0' })}>0</button>
        <button onClick={() => dispatch({ type: 'CALCULATE' })}>=</button>
        <button onClick={() => dispatch({ type: 'APPEND_VALUE', payload: '/' })}>/</button>
        <button onClick={() => dispatch({ type: 'CLEAR' })}>Clear</button>
      </div>
    </div>
  );
};

export default Calculator;