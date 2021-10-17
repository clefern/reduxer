export const getVisibleExpenses = (expenses, { text = '', sortBy, startDate, endDate}) => {

    return expenses.filter(ex => {
        const textMatch = ex.description.toLowerCase().includes(text.toLowerCase());
        const startMatch = typeof startDate != 'number' || ex.createdAt >= startDate;
        const endMatch = typeof endDate != 'number' || ex.createdAt <= endDate;
        return textMatch && startMatch && endMatch;
    }).sort((a,b) => {
        switch (sortBy) {
            case 'date':
                return a.createdAt - b.createdAt
            case 'amount':
                return a.amount - b.amount; 
        }
    });
};