import { store } from "../../Apps/InitialRedux";
import { removeExpense } from "../../redux/actions/expenses-actions";

export const ExpenseItem = ({expense}) => {
    const remove = (e) => {
        store.dispatch(removeExpense(e.id));
    }
    return <div>
        <h6>{expense.description}</h6>
        <p>{expense.createdAt}</p>
        <button onClick={() => remove(expense)}>remove</button>
    </div>
}