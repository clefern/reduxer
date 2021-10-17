import { v4 as uuid } from "uuid";

// Expense Actions
export const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        description,
        note,
        amount,
        createdAt,
        id: uuid()
    }
});

export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const editExpense = (expense) => ({
    type: 'EDIT_EXPENSE',
    expense
})