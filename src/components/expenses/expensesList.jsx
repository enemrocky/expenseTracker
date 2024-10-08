import ExpenseItem from "./expenseItem";
import "./expensesList.css";

const ExpensesList = (props) => {
	if (props.expenses.length === 0) {
		return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
	}

	return (
		<ul className="expenses-list">
			{props.expenses.map((expense, index) => (
				<ExpenseItem
					key={index}
					date={expense.date}
					amount={expense.amount}
					title={expense.title}
				/>
			))}
			;
		</ul>
	);
};

export default ExpensesList;
