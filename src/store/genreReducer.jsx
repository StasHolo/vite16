const defaultState = {
    genres: [
      {
        name: "Pop Music",
        id: 1,
        
      },
      {
        name: "Rock",
        id: 2,
        
      }
    ]
}
export const genreReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_GENRE":
      return {...state, genres: [...state.genres, action.payload]}

    case "REMOVE_GENRES":
      return {...state, genres: state.genres.filter(genre => genre.id !== action.payload)}

      case "CHANGE_INFO_GENRE":
return {
  ...state,
  genres: state.genres.map(genre => {
    if (genre.id === action.payload.id) {
      return { ...genre, name: action.payload.info };
    }
    return genre;
  })
};
    default:
      return state
  }
  }