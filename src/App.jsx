import { useState } from "react";
import Expenses from "./components/expenses/expenses";
import NewExpense from "./components/newExpense/newExpense";
import "bootstrap/dist/css/bootstrap.min.css";

const Dummy__expenses = [
	{
		id: "e1",
		title: "Toilet Paper",
		amount: 94.12,
		date: new Date(2022, 7, 14),
	},
	{
		id: "e2",
		title: "New TV",
		amount: 799.49,
		date: new Date(2021, 2, 12),
	},
	{
		id: "e3",
		title: "Car Insurance",
		amount: 294.67,
		date: new Date(2023, 2, 28),
	},
	{
		id: "e4",
		title: "New Desk (Wooden)",
		amount: 450,
		date: new Date(2021, 5, 12),
	},
];

function App() {
	const [expenses, setExpenses] = useState(Dummy__expenses);
	const saveExpenseHandler = (expense) => {
		console.log(expense);
		setExpenses((prevState) => [expense, ...prevState]);
	};

	return (
		<div>
			<NewExpense onSaveExpense={saveExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
