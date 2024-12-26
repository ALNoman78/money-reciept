import React, { useState } from 'react'
import PropTypes from 'prop-types'

const MoneyReceipt = () => {

    const [name, setName] = useState(null)
    const [inputValue , setInputValue ] = useState(null)

    const handleName = e => {
        // console.log(e);
        setName(e.target.value)
        console.log('current value', setName(e.target.value))
    }

    const handleInputValue = e => {
        setInputValue(e.target.value);
        console.log('Input value' , setInputValue(e.target.value));
    }

    const result = name && inputValue ? parseFloat(name) * parseFloat(inputValue) : '';
    return (
        <div>
            <h2>MoneyReceipt</h2>
            <input className='border  border-black p-4 m-3' onChange={handleName} type="text" name="amount" id="" />
            <p>Current value : {name}</p>
            <input onChange={handleInputValue} className='border border-black p-4 m-3' type="text" name="price" id="" />
            <p>Input Field Value = {inputValue}</p>
            <p className='text-xl font-bold text-teal-700'> Result = {result}</p>
        </div>
    )
}

MoneyReceipt.propTypes = {}

export default MoneyReceipt