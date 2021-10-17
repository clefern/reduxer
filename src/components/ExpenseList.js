import React from 'react';
import { connect } from 'react-redux';
import { ExpenseItem } from './ExpenseItem';
import { getVisibleExpenses } from '../redux/selectors/expenses-selectors';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        <h4>{props.name}</h4>
        {props.expenses.map(ex => (
            <ExpenseItem expense={ex}/>
            
        ))}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    };
}

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;