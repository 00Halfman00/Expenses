import React, { useState } from 'react';
import ExpenseItemDate from './EspenseItemDate.jsx';
import Card from './Card.jsx';

const ExpenseItem = ({ expense }) => {
  const [expenseItem, setExpenseItem] = useState(expense);

  return (
    <Card className="expense-item">
      <ExpenseItemDate date={expenseItem.date} />
      <div className="expense-item__title">{expenseItem.title}</div>
      <div className="expense-item__amount">${expenseItem.amount}</div>
    </Card>
  );
};

export default ExpenseItem;
