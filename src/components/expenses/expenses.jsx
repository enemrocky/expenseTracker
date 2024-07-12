import React, { useState } from "react";
import ExpenseItem from "./expenseItem";
import ExpenseFilter from "./expenseFilter";
import "./expenses.css";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	let expenseContent = <p>No Items Found</p>;

	if (filteredExpenses.length > 0) {
		expenseContent = filteredExpenses.map((expense) => (
			<ExpenseItem
				key={expense.id}
				date={expense.date}
				amount={expense.amount}
				title={expense.title}
			/>
		));
	}

	return (
		<div className="container">
			<ExpenseFilter
				selected={filteredYear}
				onChangeDate={filterChangeHandler}
			/>
			{expenseContent}
		</div>
	);
};

export default Expenses;
