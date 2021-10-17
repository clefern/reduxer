import { combineReducers, createStore } from "redux"
import { expensesReducer } from "../reducers/expenses-reducer"
import { filterReducer } from "../reducers/filter-reducer"
// console.clear()
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer

        })
    )
    return store;
}