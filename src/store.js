import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {
  fetchLatestBlogs,
  fetchBlogByTag,
  fetchSingleBlog as FetchSingleBlog,
} from './services/blogs';

const storeData = (data) => ({
  type: 'STORE_DATA',
  data,
});

export const fetchLatest = () => (dispatch) =>
  fetchLatestBlogs().then((res) => dispatch(storeData(res)));

export const fetchTaggedBlogs = () => (dispatch) =>
  fetchBlogByTag().then((res) => dispatch(storeData(res)));

export const fetchSingleBlog = (id) => (dispatch) =>
  FetchSingleBlog(id).then((res) => dispatch(storeData(res)));

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_DATA':
      return action.data;
    default:
      return state;
  }
};

const reducer = combineReducers({
  data: dataReducer,
});

export default (initialState) =>
  createStore(reducer, initialState, applyMiddleware(thunkMiddleware));
