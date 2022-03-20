import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './Actions/CounterAction';
import './CountDown.css';




const CountDown = () => {

    const dispatch = useDispatch();
    const countVal = useSelector((state)=>{
     return state
    })
    return (
        <div className='countDown'>
            <button onClick={()=> dispatch(decrement())}>-</button>
            <h1>{countVal}</h1>
            <button onClick={()=> dispatch(increment())}>+</button>
        </div>
    );
};

export default CountDown;