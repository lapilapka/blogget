import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';
import {
  SEARCH_REQUEST, searchRequestError, searchRequestSuccess
} from './searchAction';

function* fetchSearch(search) {
  try {
    const request = yield axios(
      ` https://www.reddit.com/search.json?q=${search}`
    );
    yield put(searchRequestSuccess(request.data.data));
  } catch (e) {
    put(searchRequestError(e));
  }
}

export function* watchSearch() {
  yield takeEvery(SEARCH_REQUEST, fetchSearch);
}
