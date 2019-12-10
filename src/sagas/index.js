import { fork } from 'redux-saga/effects';
import HomeSagas from '../home/sagas';

export default function* main() {
    yield fork(HomeSagas);
}