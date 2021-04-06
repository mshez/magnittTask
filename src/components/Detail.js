import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSingleBlog } from '../store';

const Detail = (props) => {
  const { details } = props;

  const onNavigate = (path) => {
    window.location.pathname = path;
  };

  return (
    <div className="container md:max-w-2xl max-w-md mx-auto">
      <button
        type="button"
        onClick={() => onNavigate('/')}
        className="no-underline hover:underline"
      >
        Back to home
      </button>
      <p className="text-3xl">{details.title} blogs</p>
      <div className="max-w-md mx-auto my-4 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </div>
    </div>
  );
};

Detail.serverFetch = fetchSingleBlog; // static declaration of data requirements

const mapStateToProps = (state) => ({
  details: state.data,
});

const mapDispatchToProps = {
  fetchSingleBlog,
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
