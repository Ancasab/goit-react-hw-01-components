import React from 'react'
// import { type } from '@testing-library/user-event/dist/type'
import PropTypes from 'prop-types'


const TransactionHistory = ({tansactions}) => {
  return (
    
    <table className="transaction-history">
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody className="transaction-list">
            {tansactions.map(({type, amount, currency}) => (
             <tr className='transaction' >
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
        ))} 
        </tbody>
    </table>   

  )
}

TransactionHistory.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
};


export default TransactionHistory