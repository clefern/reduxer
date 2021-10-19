import React from 'react';
import { connect } from 'react-redux';
import { store } from '../../Apps/InitialRedux';
import { removeExpense } from '../../redux/actions/expenses-actions';
import { getVisibleExpenses } from '../../redux/selectors/expenses-selectors';
import { ExpenseItem } from './ExpenseItem';

const ExpenseListComponent = (props) => {
    
    return <div>
        <h3>Expense List</h3>
        <h4>{props.name}</h4>
        {props.expenses.map((ex, i) => (
            <ExpenseItem id={i} expense={ex}/>
        ))}
    </div>
}

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    };
}

const ExpenseList = connect(mapStateToProps)(ExpenseListComponent);

export default ExpenseList;