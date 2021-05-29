import { fork } from "redux-saga/effects"
import { watcherProvinceSaga } from './provinceSagas'
import { watcherDistrictSaga } from './districtSagas'

export function* rootSaga() {
    yield fork(watcherProvinceSaga)
    yield fork(watcherDistrictSaga)
}