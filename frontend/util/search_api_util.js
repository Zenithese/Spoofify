

export const fetchResults = (search) => {
    return $.ajax({
        method: 'GET',
        url: "api/search",
        data: { search },
    })
}

export const clearSearches = () => {
    return $.ajax({
        method: 'DELETE',
        url: 'api/search'
    })
}