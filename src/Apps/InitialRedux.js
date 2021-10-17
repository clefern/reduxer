import configureStore from '../redux/store/configureStore';
import { addExpense } from '../redux/actions/expenses-actions';
import { setFilterText, setSortByFilter } from '../redux/actions/filter-actions';
import { getVisibleExpenses } from '../redux/selectors/expenses-selectors';
export const store = configureStore();

console.log(store.getState());
store.subscribe(() => {
  const state = store.getState();
  const visableExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visableExpenses);
})

// Expense Trials

export const first = store.dispatch(addExpense({ description: 'Renegade', amount: 200, createdAt: new Date('1999-01-25').getTime() }))
export const second = store.dispatch(addExpense({ description: 'Tiggo 8', amount: 100, createdAt: new Date('1984-01-25').getTime() }))
// const remove = store.dispatch(removeExpense(first.expense.id))
// const edit = store.dispatch(editExpense({
//     ...second.expense,
//     description: 'Tucson',
//     amount: 9999
// }))

// Filter Trials
setTimeout(() => {
    store.dispatch(setFilterText('gade'))
}, 2000);

store.dispatch(setSortByFilter('amount'))
// // store.dispatch(setFilterText('compra do renegade'))
// console.log('-----------   Applying filters    -----------');
// store.dispatch(setFilterStartDate(new Date('1982-01-25').getTime()));
// store.dispatch(setFilterEndDate(new Date('2022-01-25').getTime()));

