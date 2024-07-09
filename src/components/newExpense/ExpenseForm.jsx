import React, { useState } from "react";

const NewExpenseForm = (props) => {
	const [newTitle, setNewTitle] = useState("");
	const [newAmount, setNewAmount] = useState("");
	const [newDate, setNewDate] = useState("");

	// ALTERNATIVE TO USE ONE USESTATE FUNCTION TO MANAGE MULTIPLE STATES
	// const [userInput, setUserInput] = useState({
	// 	newTitle: "",
	// 	newAmount: "",
	// 	newDate: "",
	// });

	const titleChangeHandler = (event) => {
		setNewTitle(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	newTitle: event.target.value,
		// });
	};

	const amountChangeHandler = (event) => {
		setNewAmount(event.target.value);
	};

	const dateChangeHandler = (event) => {
		setNewDate(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		// to collect our state value to one object
		const expenseData = {
			title: newTitle,
			amount: newAmount,
			date: new Date(newDate),
		};

		props.onSaveData(expenseData);
		// console.log(expenseData);

		setNewTitle("");
		setNewAmount("");
		setNewDate("");
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						value={newTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label htmlFor="amount">Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={newAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label htmlFor="date">Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2024-12-31"
						value={newDate}
						onChange={dateChangeHandler}
					/>
				</div>
				<div className="new-expense__actions">
					<button type="submit">Add Expense</button>
				</div>
			</div>
		</form>
	);
};

export default NewExpenseForm;
