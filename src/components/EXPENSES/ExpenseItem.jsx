import React, { useState } from 'react';
import ExpenseItemDate from './ExpenseItemDate.jsx';
import Card from '../UI/Card.jsx';


function ExpenseItem(props) {
  const [expenseItem, setExpenseItem] = useState(props.expense);
  //console.log('ExpenseItem: ', 'id: ', props.expense.id, props)
  return (
    <Card className="expense-item">
      <ExpenseItemDate date={expenseItem.date} />
      <div className="expense-item__title">{expenseItem.title}</div>
      <div className="expense-item__amount">${expenseItem.amount}</div>
    </Card>
  );
}

export default ExpenseItem;


