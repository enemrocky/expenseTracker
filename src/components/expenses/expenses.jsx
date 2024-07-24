import React, { useState } from "react";
import ExpenseFilter from "./expenseFilter";
import ExpensesList from "./expensesList";
import "./expenses.css";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	console.log(filteredExpenses);

	return (
		<div className="container">
			<ExpenseFilter
				selected={filteredYear}
				onChangeDate={filterChangeHandler}
			/>
			<ExpensesList expenses={filteredExpenses} />
		</div>
	);
};

export default Expenses;
