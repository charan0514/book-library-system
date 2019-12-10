
import { fork, put, call, takeLatest, all } from 'redux-saga/effects';
import * as APIUtils from  '../../utils/APIUtils';
import * as Constants from '../constants'
import * as api from '../api';

const {
  FETCH_GENRES, FETCH_GENRES_SUCCESS, FETCH_GENRES_FAILED,
} = Constants;

function* fetchGenres(action) {
    try {
      const response = yield call(api.getGenres, action.data);
      if (response.status === 200) {
        yield put({
          type: FETCH_GENRES_SUCCESS,
          data: response.data
        })
    } else {
      yield put({
        type: FETCH_GENRES_FAILED,
        data: null
      })
    }
  } catch (e) {
    yield put({
      type: FETCH_GENRES_FAILED,
      data: e
    })
  }
}

export const watchFetchGenres = takeLatest(FETCH_GENRES, fetchGenres)

export default function* Sagas() {
    yield all ([
      watchFetchGenres
    ])
}



  