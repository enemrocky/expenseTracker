import React, { useState } from "react";
import ExpenseItem from "./expenseItem";
import ExpenseFilter from "./expenseFilter";
import "./expenses.css";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	return (
		<div className="container">
			<ExpenseFilter
				selected={filteredYear}
				onChangeDate={filterChangeHandler}
			/>
			{props.items.map((expense) => (
				<ExpenseItem
					date={expense.date}
					amount={expense.amount}
					title={expense.title}
				/>
			))}
		</div>
	);
};

export default Expenses;
