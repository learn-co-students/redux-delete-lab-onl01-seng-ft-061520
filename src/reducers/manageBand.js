import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = {
        id: uuid(),
        name: action.name
      }
      return { bands: state.bands.concat(band) };
      // return { ...state, bands: [...state.bands, action.name] }
    case 'DELETE_TODO':
      return {bands: state.bands.filter(band => band.id !== action.id)}
    default:
      return state;
  }
};
