const defaultState = {
    customers: [
      {
        name: "My Call",
        id: 1,
        info: "Последняя новинка в плейлисте, исполнитель: Kuma the Third"
      },
      {
        name: "Through The Valley",
        id: 2,
        info: "Для задротов. Исполнитель: Shawn James"
      }
    ]
}


export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "ADD_CUSTOMER":
        return {...state, customers: [...state.customers, action.payload]}
  
      case "REMOVE_CUSTOMERS":
        return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
        case "CHANGE_INFO":
  return {
    ...state,
    customers: state.customers.map(customer => {
      if (customer.id === action.payload.id) {
        return { ...customer, info: action.payload.info };
      }
      return customer;
    })
  };
      default:
        return state
    }
  }