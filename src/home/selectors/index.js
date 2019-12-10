import {createSelector} from 'reselect';
import * as APIUtils from  '../../utils/APIUtils';

export const getGenreIsFetching = (state) => state.home.isGenresFetching

export const getGenreIsFetched = (state) => state.home.isGenresFetched

export const getGenreIsFetchError = (state) => state.home.isGenresFetchError

export const getGenreFetchResponse = (state) => state.home.genresFechResponse

export const getGenreFetchSuccess = createSelector(
    getGenreIsFetched, getGenreIsFetchError, getGenreFetchResponse, 
    (isFetched, isError, response) => {
        if (isFetched && !isError && !!response) {
            return response
        }
    } 
)

export const getBookList = state => state.home.bookList

export const getBookListSuccess = createSelector(
    getBookList, (bookList) => {
        if (!!bookList) {
            return bookList
        } else {
            return {}
        }
    }
)