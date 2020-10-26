
import { takeEvery, takeLatest, put, call } from 'redux-saga/effects';
import Api from '../APIs/Api'
import Config from '../APIs/ApiConfig'
import types from '../util/types';

function* getRecipes() {

    try {
        // Calling recipes Api
        const response = yield call(new Api().getJSON, Config.fetchUrl )
        console.log(response)
        if(response.status=='success') {
            // Store response in reducer if success
            yield put({type: types.GET_RECIPES_SUCCESS, data: response.data})
        } else {
            // Alert if api failed.
            alert('Something went wrong.')
            yield put({type: types.GET_RECIPES_FAILED})
        }
        
    } catch (err) {
        alert('Something went wrong.')
        yield put({type: types.GET_RECIPES_FAILED})
    }
}

// Watcher for GET_RECIPES, calls getRecipes function
export function* watchRecipes() {
    yield takeLatest(types.GET_RECIPES, getRecipes)
}

