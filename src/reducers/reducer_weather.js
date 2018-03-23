import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  // console.log('Action received', action);
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]);
      if (action.payload.data) {
        return [action.payload.data, ...state]; // ES6 sytax, same result as above line
      } else {
        alert('please type in correct full city name');
      }
  }

  return state;
}
