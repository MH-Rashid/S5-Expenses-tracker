import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormDisplay(false);
  }

  const [formDisplay, setFormDisplay] = useState(false);

  function displayFormHandler() {
    setFormDisplay(true);
  }

  function hideFormHandler() {
    setFormDisplay(false);
  }

  let form = <button onClick={displayFormHandler}>Add New Expense</button>;

  if (formDisplay === true) {
    form = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onHideForm={hideFormHandler}
      />
    );
  }

  return <div className="new-expense">{form}</div>;
};

export default NewExpense;
