import React, { useState } from 'react'
import PropTypes from 'prop-types'

const FieldValue = () => {
    const [value1, setValue1] = useState(null)
    const [value2, setValue2] = useState(null)

    const handlePriceValue = e => {
        setValue1(e.target.value)
        console.log('Product price', setValue1(e.target.value));
    }
    const handleItems = e => {
        setValue2(e.target.value)
        console.log('Items ', setValue2(e.target.value));
    }
    const result = value1 && value2 ? value1 * value2 : '';
    return (
        <div className='border-2 border-blue-500 md:max-w-7xl mx-auto'>
            <h2>FieldValue</h2>
            <div className='flex items-center justify-around border border-black'>
                <li>Per Products Price </li>
                <div className=' border border-blue-400'>
                    <input onChange={handlePriceValue} className='border-0 md:w-36 border-black p-2 m-2' type="text" name="" id="" placeholder='Per Price' />
                    <span className='text-2xl'>*</span>
                    <input onChange={handleItems} className='border-0 md:w-36 border-black p-2 m-2' type="text" name="" id="" placeholder='Products Details' />
                </div>
                <span className='text-2xl'>=</span>
                <div className='border border-red-500 p-4 m-3'>
                    {result}
                </div>
            </div>
        </div>
    )
}

FieldValue.propTypes = {}

export default FieldValue