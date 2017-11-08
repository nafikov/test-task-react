const initialState = {
  tabs: [
    {
      id: 1,
      name: 'Tab 1',
      path: '/tabs/1'
    },
    {
      id: 2,
      name: 'Tab 2',
      path: '/tabs/2'
    },
    {
      id: 3,
      name: 'Tab 3',
      path: '/tabs/3'
    },
  ],
  entries: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ENTRY':
      return { ...state, entries: [...state.entries, action.entry]};
    case 'REMOVE_ENTRIES':
      return { ...state, entries: state.entries.filter(entry => {
        return !(entry.tab === action.tab && entry.checked);
      })};
    case 'SELECT_ENTRIES':
      return { ...state, entries: state.entries.map(entry => {
        if (entry.id === action.entry.id) {
          entry.checked = !entry.checked;
        }
        return entry;
      })};
    default:
      return state;
  }
}

export default rootReducer;