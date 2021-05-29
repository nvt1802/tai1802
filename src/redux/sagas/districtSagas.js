import { takeLatest, call, put } from "redux-saga/effects"
import * as actionTypes from '../actions/actionTypes'
import { district } from 'services'

export function* watcherDistrictSaga() {
	yield takeLatest(actionTypes.DISTRICT_API_CALL_REQUEST, workerSaga)
}

function fetchDistrictData(provinceId) {
	return district.findDistrictByProvinceId(provinceId)
}

export function* workerSaga(action) {
	try {
		const response = yield call(fetchDistrictData, action.payload)
		const data = response.data.results
		yield put({ type: actionTypes.DISTRICT_API_CALL_SUCCESS, data })
	} catch (error) {
		yield put({ type: actionTypes.DISTRICT_API_CALL_FAILURE, error })
	}
}