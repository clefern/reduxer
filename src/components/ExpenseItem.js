export const ExpenseItem = ({expense}) => (
    <div>
        <h6>{expense.description}</h6>
        <p>{expense.createdAt}</p>
    </div>
) 