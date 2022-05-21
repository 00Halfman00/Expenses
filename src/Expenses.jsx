import React from 'react';
import ExpenseItem from './ExpenseItem.jsx';
import Card from './Card.jsx';

const Expenses = ({ expenses }) => {
  //console.log('Expenses: ', expenses);
  return (
    <Card className="expenses">
      <ExpenseItem expense={expenses[0]} />
      <ExpenseItem expense={expenses[1]} />
      <ExpenseItem expense={expenses[2]} />
      <ExpenseItem expense={expenses[3]} />
    </Card>
  );
};

export default Expenses;
