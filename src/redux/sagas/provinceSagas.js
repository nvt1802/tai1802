import { takeLatest, call, put } from "redux-saga/effects"
import * as actionTypes from "../actions/actionTypes"
import { province } from "services"

export function* watcherProvinceSaga() {
  yield takeLatest(actionTypes.PROVINCE_API_CALL_REQUEST, workerSaga)
}

function fetchProvinceData() {
  return province.findAllProvince()
}

function* workerSaga() {
  try {
    const response = yield call(fetchProvinceData)
    const data = response?.data?.results
    yield put({ type: actionTypes.PROVINCE_API_CALL_SUCCESS, data })
  } catch (error) {
    yield put({ type: actionTypes.PROVINCE_API_CALL_FAILURE, error })
  }
}
