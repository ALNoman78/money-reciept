import React from 'react'
import PropTypes from 'prop-types'
import MoneyReceipt from '../MoneyRecipt/MoneyReceipt'
import FieldValue from '../FieldValue/FieldValue'

const Root = () => {
    return (
        <div>
            <h2 className="text-center">This is root components</h2>
            {/* <MoneyReceipt></MoneyReceipt> */}
            <FieldValue></FieldValue>
        </div>
    )
}

Root.propTypes = {}

export default Root