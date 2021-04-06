import dummyLatestBlogs from './dummyBlogs.json';
import dummyTagBlogs from './dummyTagBlogs.json';
import dummySingleBlog from './dummySingleBlog.json';

export function fetchLatestBlogs() {
  return new Promise((resolve) => setTimeout(resolve(dummyLatestBlogs), 0));
}

export function fetchSingleBlog(id) {
  return new Promise((resolve) => setTimeout(resolve(dummySingleBlog), 0));
}

export function fetchBlogByTag() {
  return new Promise((resolve) => setTimeout(resolve(dummyTagBlogs), 0));
}
