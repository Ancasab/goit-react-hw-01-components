import React from 'react'
import PropTypes from 'prop-types'
import css from './TransactionHistory.module.css'


const TransactionHistory = ({tansactions}) => {
  return (
    <table className={css.transactionHistory}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody className={css.transactionList}>
            {tansactions.map(({id, type, amount, currency}) => (
            <tr className={css.transaction} key={id}>
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