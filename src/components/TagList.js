import React from 'react';
import { connect } from 'react-redux';
import { fetchTaggedBlogs } from '../store';

const TagList = ({ history, latestBlogs }) => {
  const title = (typeof window !== 'undefined' && window.location.pathname.split('/')[2]) || '';
  const onNavigate = (path) => {
    window.location.pathname = path;
  };
  return (
    <div className="container md:max-w-2xl max-w-md mx-auto my-10">
      <button
        type="button"
        onClick={() => onNavigate('/')}
        className="no-underline hover:underline"
      >
        Back to home
      </button>
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl  my-5">
        {title} blogs
      </h2>
      {latestBlogs.map((blog) => (
        <div
          key={blog.id}
          className="max-w-md mx-auto my-4 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
        >
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-full w-full object-cover md:w-48"
                src={blog.image}
                alt="Man looking at item at a store"
              />
            </div>
            <div className="p-8">
              <button
                type="button"
                onClick={() => onNavigate(`/${blog.slug}`)}
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                {blog.title}
              </button>
              <p className="mt-2 text-gray-500">{blog.description}</p>
              <div className="flex flex-row mt-2">
                {blog.tags.split(',').map((tag) => (
                  <button
                    key={tag}
                    onClick={() => history.push(`/tag/${tag}`)}
                    type="button"
                    className="hover:bg-blue-500 hover:text-white colors.blueGray border px-2 py-1 mx-1 text-xs rounded"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

TagList.serverFetch = fetchTaggedBlogs; // static declaration of data requirements

const mapStateToProps = (state) => ({
  latestBlogs: state.data,
});

const mapDispatchToProps = {
  fetchTaggedBlogs,
};

export default connect(mapStateToProps, mapDispatchToProps)(TagList);
