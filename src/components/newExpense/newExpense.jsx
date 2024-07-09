import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./newExpense.css";

const NewExpense = (props) => {
	const saveDataHandler = (enteredData) => {
		const expenseData = {
			...enteredData,
		};
		// console.log(expenseData);
		props.onSaveExpense(expenseData);
	};

	return (
		<div className="new-expense">
			<ExpenseForm onSaveData={saveDataHandler} />
		</div>
	);
};

export default NewExpense;
