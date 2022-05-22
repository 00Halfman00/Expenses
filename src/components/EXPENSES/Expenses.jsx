import React from 'react';
import ExpenseItem from './ExpenseItem.jsx';
import Card from '../UI/Card.jsx';


function Expenses({expenses}) {
  // good idead to see this children property on props
  // card does not come into play in props until ExpenseItem, actually Card then ExpenseItem
  //console.log('Expenses: ', expenses)
  return (
    <Card className="expenses">
      <ExpenseItem expense={expenses[0]} />
      <ExpenseItem expense={expenses[1]} />
      <ExpenseItem expense={expenses[2]} />
      <ExpenseItem expense={expenses[3]} />
    </Card>
  );
}

export default Expenses;
