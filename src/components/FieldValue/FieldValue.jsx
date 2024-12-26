import React, { useState } from 'react'
import PropTypes from 'prop-types'

const FieldValue = () => {
    const [value1 , setValue1] = useState(null)
    const [value2 , setValue2] = useState(null)

    const handlePriceValue = e => {
        setValue1(e.target.value)
        console.log('Product price' , setValue1(e.target.value));
    }
    const handleItems = e => {
        setValue2(e.target.value)
        console.log('Items ' , setValue2(e.target.value));
    }
    const result = value1 && value2 ? value1 * value2 : '';
    return (
        <div>
            <h2>FieldValue</h2>
            <div>
                <input onChange={handlePriceValue} className='border border-black p-4 m-2' type="text" name="" id="" />
                <input onChange={handleItems} className='border border-black p-4 m-2' type="text" name="" id="" />
                <div className='border border-red-500 p-4 m-3'>
                    {result}
                </div>
            </div>
        </div>
    )
}

FieldValue.propTypes = {}

export default FieldValue