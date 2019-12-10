
import * as Constants from '../constants'

const {
  FETCH_GENRES, FETCH_GENRES_SUCCESS, FETCH_GENRES_FAILED,
  ADD_BOOKS, ADD_BOOKS_SUCCESS, ADD_BOOKS_FAILED, UPDATE_BOOKS_BY_GENRE, UPDATE_ALL_BOOKS
} = Constants;

const initState = {
};

export default function Main(state = initState, action) {
  switch(action.type) {
    case FETCH_GENRES: {
      return {
        ...state,
        isGenresFetching: true,
        isGenresFetched: false,
        isGenresFetchError: false
      }
    }
    case FETCH_GENRES_SUCCESS: {
      return {
        ...state,
        genresFechResponse: action.data,
        isGenresFetching: false,
        isGenresFetched: true,
        isGenresFetchError: false
      }
    }
    case FETCH_GENRES_FAILED: {
      return {
        ...state,
        genresFechResponse: null,
        isGenresFetching: false,
        isGenresFetched: true,
        isGenresFetchError: true
      }
    }
    
    // case UPDATE_BOOKS_BY_GENRE: {
    //   return {
    //     ...state,
    //     bookList: {...state.}
    //   }
    // }

    case UPDATE_ALL_BOOKS: {
      return {
        ...state,
        bookList: action.data
      }
    }
    
    // case ADD_BOOKS: {
    //   return {
    //     ...state,
    //     addBookIsProcessing: true,
    //     addBookIsProcessed: false,
    //     addBookIsError: false
    //   }
    // }

    // case ADD_BOOKS_SUCCESS: {
    //   return {
    //     ...state,
    //     addBookIsProcessing: false,
    //     addBookIsProcessed: true,
    //     addBookIsError: false
    //   }
    // }

    // case ADD_BOOKS_FAILED: {
    //   return {
    //     ...state,
    //     addBookIsProcessing: false,
    //     addBookIsProcessed: true,
    //     addBookIsError: true
    //   }
    // }

    default:
      return state
  }
}
