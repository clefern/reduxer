import React from "react";
import { connect } from "react-redux";
import { setFilterText, setSortByFilter } from "../../redux/actions/filter-actions";

const ExpenseFilter = (props) => {
    const setTextFilter = (e) => {
        console.log('setTextFilter', e.target.value);
        props.dispatch(setFilterText(e.target.value))
    }
    const onChangeOrder = (e) => {
        props.dispatch(setSortByFilter(e.target.value))
    }
    return (
        <div>
            <h3>Expense Filter</h3>
            <input type="text" 
                value={props.filters.text}
                onChange={setTextFilter}
            />
            <label>Orber by:</label>
            <select 
                onChange={onChangeOrder}
                value={props.filters.sortBy}
            >
                <option value="amount">Amount</option>
                <option value="date">Date</option>
            </select>
        </div>
    );
};

const mapStateToProps = (state) => ({
    filters: state.filters
});

export default connect(mapStateToProps)(ExpenseFilter);