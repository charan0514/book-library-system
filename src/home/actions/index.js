import {FETCH_GENRES, UPDATE_ALL_BOOKS} from '../constants';

export function ActionFetchGenres (data) {
    return {
        type: FETCH_GENRES,
        data
    }
}

export function ActionUpdateBookList (data) {
    return {
        type: UPDATE_ALL_BOOKS,
        data
    }
}