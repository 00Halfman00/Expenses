import React, { useState } from 'react';
import ExpenseItemDate from './EspenseItemDate.jsx';

const ExpenseItem = ({ expense }) => {
  const [expenseItem, setExpenseItem] = useState(expense);

  return (
    <div className="expense-item-container">
      <div className="expense-item">
      <ExpenseItemDate date={expenseItem.date}/>
        <div className="expense-item__title">{expenseItem.title}</div>
        <div className="expense-item__amount">${expenseItem.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
