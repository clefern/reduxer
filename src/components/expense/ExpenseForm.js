import React, { useState } from "react"

const ExpenseForm = () => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [note, setNote] = useState('');
    const onDescriptionChange = (e) => {
        console.log(e.target.value);
        // setDescription(e.target.value)
    }
    const onAmountChange = (e) => {
        console.log(e.target.value);
        // setAmount(e.target.value)
    }
    const onNoteChange = (e) => {
        console.log(e.target.value);
        // setNote(e.target.value)
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

                <button>Add Expense</button>
            </form>
        </div>
    )
}

export default ExpenseForm;