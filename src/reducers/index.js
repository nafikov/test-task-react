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
  entries: [
    {
      name: 'asdf',
      tab: '1',
      id: 1509704877995
    },
    {
      name: 'dddd',
      tab: '1',
      id: 1509704881956
    }
  ]
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ENTRY':
      return { ...state, entries: [...state.entries, action.entry]};
    case 'REMOVE_ENTRIES':
      return { ...state, entries: state.entries.filter(entry => {
        return action.entries.indexOf(entry.id.toString()) === -1;
      })};
    default:
      return state;
  }
}

export default rootReducer;