import React, { useState } from "react";
import "./expenseItem.css";
import ExpenseDate from "./expenseDate";
import Card from "../UI/card";

const ExpenseItem = (props) => {
	const [expenseTitle, setExpenseTitle] = useState(props.title);

	const clickHandler = () => {
		setExpenseTitle("Updated");
		console.log("updated");
	};

	return (
		<div className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{expenseTitle}</h2>
			</div>
			<div className="expense-item__price">${props.amount}</div>
			<div>
				<button onClick={clickHandler}>Change Title</button>
			</div>
		</div>
	);
};

export default ExpenseItem;
