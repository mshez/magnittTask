import React from 'react';
import { connect } from 'react-redux';
import { fetchTaggedBlogs } from '../store';
import Card from './Common/Card';

const TagList = ({ latestBlogs }) => {
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
        <Card key={blog.id} data={blog} />
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
