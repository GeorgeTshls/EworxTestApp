import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    cities: [],
  };
  
  const cityReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_CITY':
        return {
          ...state,
          cities: action.payload,
        };
  
      case 'REMOVE_CITY':
        return {
          ...state,
          cities: state.cities.filter((city) => city.location.name !== action.payload),
        };
  
      default:
        return state;
    }
  };

  
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['cities'], // List of reducer keys to persist
  };
  
  export default persistReducer(persistConfig, cityReducer);