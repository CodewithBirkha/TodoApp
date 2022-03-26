const DataReducer=(state, action)=>{

switch(action.type){
  case 'SET_ITEMS':
      return{ 
          ...state,
          items: action.payload,
      }
  case 'ADD_ITEM':
      return{
          ...state,
          items: [...state.items,action.payload]
      }
      case 'DELETE_ITEM':
        return {
            ...state,
            items: state.items.filter((item) => item.id != action.payload),
        }
		case 'UPDATE_ITEM':
			return {
				...state,
				items: state.items.map((item) =>
					item.id === action.payload.id ? action.payload : item
				),
			}
            case 'SET_TOEDIT':
                return {
                    ...state,
                    toEdit: action.payload,
                }
            case 'RESET_TOEDIT':
                return {
                    ...state,
                    toEdit: null,
                }
      default:
          return state
}
}
export default DataReducer