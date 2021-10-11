
import { v4 as uuid } from "uuid";
import { combineReducers, createStore } from "redux";

// Data
const filterInitialState = {
    text: '',
    sortBy: 'amount',
    startDate: null,
    endDate: null
};

// Expense Actions
const addExpense = ({
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

const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (expense) => ({
    type: 'EDIT_EXPENSE',
    expense
})

// Filter Actions
const setFilterText = (text) => ({
    type: 'SET_TEXT_FILTER',
    text
});

const setSortByFilter = (kind = 'amount') => ({
    type: 'SET_SORTBY_FILTER',
    sortBy: kind
})

// Reducers

const expensesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [ ...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map(item => {
                if (item.id === action.expense.id) {
                    return {
                        ...item,
                        ...action.expense
                    }
                }
                return item;
            });
        default:
            return state;
    }
};


const filterReducer = (state = filterInitialState, action) => {
    
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return { ...state, text: action.text };
        case 'SET_SORTBY_FILTER':
            return { ...state, f: action.sortBy };
        case 'SET_START_DATE':
            return { ...state, startDate: action.startDate };
        case 'SET_END_DATE':
            return { ...state, endDate: action.endDate };
        default:
            return state;
    }
}

// Main

export const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filter: filterReducer
    })
)

store.subscribe(() => {
    console.log(store.getState());
})

// Expense Trials

// const first = store.dispatch(addExpense({ description: 'Renegade', amount: 100 }))
// const second = store.dispatch(addExpense({ description: 'Tiggo 8', amount: 100 }))
// const remove = store.dispatch(removeExpense(first.expense.id))
// const edit = store.dispatch(editExpense({
//     ...second.expense,
//     description: 'Tucson',
//     amount: 9999
// }))

// Filter Trials

// const text = store.dispatch(setFilterText('text'))
store.dispatch(setSortByFilter('date'))
 