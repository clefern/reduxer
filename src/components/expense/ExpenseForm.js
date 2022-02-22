import React, { useState } from "react"
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const date = new Date();
const now = moment();

const ExpenseForm = () => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [note, setNote] = useState('');
    const [createdAt, setCreatedAt] = useState(null);
    const [dateFocus, setDateFocus] = useState(false);
    const onDescriptionChange = (e) => {
        setDescription(e.target.value)
    }
    const onAmountChange = (e) => {
        const amountVal = e.target.value;
        if (amountVal.match(/^\d*(\.\d{0,2})?$/)) {
            setAmount(e.target.value)
        }
        console.log(e.target.value);
    }
    const onNoteChange = (e) => {
        setNote(e.target.value)
    }
    const onChangeDate = (e) => {
        console.log(e);
        // setCreatedAt(e.target.value)
    }
    const onDateFocusChange = (e) => {
        console.log(e);
        // setDate(e.target.value)
    }
    return (
        <div>
            <h3>Form</h3>
            <form>
                <input
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value={description}
                    onChange={onDescriptionChange}
                />

                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={onAmountChange}
                />

                <textarea
                    placeholder="Add a note for your expense (optional)"
                    value={note}
                    onChange={onNoteChange}
                ></textarea>

                <SingleDatePicker
                    date={createdAt}
                    onDateChange={onChangeDate}
                    focused={dateFocus}
                    onFocusChange={onDateFocusChange}
                />

                <button>Add Expense</button>
            </form>
        </div>
    )
}

export default ExpenseForm;