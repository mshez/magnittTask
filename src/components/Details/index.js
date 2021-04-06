import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleBlog } from '../../store';
import PageSeo from '../Common/PageSeo';
import Comments from './Comments';

const Detail = (props) => {
  const { details } = props;

  const onNavigate = (path) => {
    window.location.pathname = path;
  };

  return (
    <React.Fragment>
      <PageSeo title={details.title} description={details.description} />
      <div className="container md:max-w-2xl max-w-md mx-auto my-10">
        <button
          type="button"
          onClick={() => onNavigate('/')}
          className="no-underline hover:underline"
        >
          Back to home
        </button>
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl  my-5">
          {details.title}
        </h2>
        <div className="max-w-md mx-auto my-4 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <img
            className="h-full w-full object-cover"
            src={details.image}
            alt="Man looking at item at a store"
          />
          <p className="text-left p-5 text-base	leading-relaxed">{details.description}</p>
        </div>
        <Comments data={details.comments} />
      </div>
    </React.Fragment>
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
