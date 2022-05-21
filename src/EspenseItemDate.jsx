import React from 'react';

const ExpenseItemDate = ({ date }) => {
  //console.dir(date);
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: 'numeric' });
  const year = date.getFullYear();
  // keep as much of the computation outside of the return
  return (
    <div className="expense-item__date">
      <div className="expense-item__month">{month}</div>
      <div>{day}</div>
      <div className='expense-item__year'>{year}</div>
    </div>
  );
};

export default ExpenseItemDate;
