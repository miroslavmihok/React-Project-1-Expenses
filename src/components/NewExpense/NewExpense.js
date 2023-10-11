import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  
  const [isShown, setIsShown] = useState(false);
  const [isShownButton, setIsShownButton] = useState(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const formHandler = () => {
    setIsShown(true);
    setIsShownButton(false);
  };

  const cancelHandler = (cancelValue) => {
    setIsShown(!cancelValue);
    setIsShownButton(cancelValue);
  };

  return (
    <div className='new-expense'>
      {isShownButton && <button onClick={formHandler}>Add New Expense</button>}
      {isShown && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler} />}
    </div>
  );
};

export default NewExpense;
