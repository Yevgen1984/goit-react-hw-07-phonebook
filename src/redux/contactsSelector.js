// export const selectContacts = state => {console.log(state); return state.сontacts.items};
export const selectedFilter = state => state.filter.filter;
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
