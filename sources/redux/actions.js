export const addCity = (city) => {
    return {
      type: 'ADD_CITY',
      payload: city,
    };
  };
  
  export const removeCity = (city) => {
    return {
      type: 'REMOVE_CITY',
      payload: city,
    };
  };
  