// Filter Actions
export const setFilterText = (text) => ({
    type: 'SET_TEXT_FILTER',
    text
});

export const setSortByFilter = (kind = 'amount') => ({
    type: 'SET_SORTBY_FILTER',
    sortBy: kind
})

export const setFilterStartDate = (date) => ({
    type: 'SET_START_DATE',
    startDate: date
})

export const setFilterEndDate = (date) => ({
    type: 'SET_END_DATE',
    endDate: date
})