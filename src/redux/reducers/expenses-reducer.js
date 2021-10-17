export const expensesReducer = (state = [], action) => {
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