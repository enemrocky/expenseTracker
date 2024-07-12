import React from "react";
import "./expenseItem.css";
import ExpenseDate from "./expenseDate";

const ExpenseItem = (props) => {
	return (
		<li className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{props.title}</h2>
			</div>
			<div className="expense-item__price">${props.amount}</div>
		</li>
	);
};

export default ExpenseItem;
