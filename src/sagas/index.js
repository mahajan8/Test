import { all, fork} from 'redux-saga/effects';

import { watchRecipes } from './homeSaga';

export function* rootSaga () {
  yield all([
    fork(watchRecipes),
  ]);
};