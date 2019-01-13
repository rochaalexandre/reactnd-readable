import { all, takeLatest } from 'redux-saga/effects';

import * as PostTypes from './post/postTypes';
import { fetchPosts, fetchPost } from './post/postSaga';

import * as CategoryTypes from './category/categoryType';
import { fetchCategories } from './category/categorySaga';

export default function* rootSaga() {
    yield all([
        takeLatest(PostTypes.FECTH_POSTS.REQUEST, fetchPosts),
        takeLatest(PostTypes.FECTH_POST.REQUEST, fetchPost ),

        takeLatest(CategoryTypes.FETCH_CATEGORIES.REQUEST, fetchCategories),
    ]);
}