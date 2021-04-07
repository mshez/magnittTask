import React from 'react';
import { connect } from 'react-redux';
import { fetchLatest } from '../store';
import Card from './Common/Card';
import PageSeo from './Common/PageSeo';

class Home extends React.Component {
  onNavigate(path) {
    window.location.pathname = path;
  }

  render() {
    const { latestBlogs } = this.props;

    return (
      <React.Fragment>
        <PageSeo title="Home page blogs" description="Home page with latest blogs" />
        <div className="container md:max-w-2xl max-w-md mx-auto  my-10">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl  my-5">
            Latest blogs
          </h2>
          {latestBlogs.map((blog) => (
            <Card key={blog.id} data={blog} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}
Home.serverFetch = fetchLatest; // static declaration of data requirements

const mapStateToProps = (state) => ({
  latestBlogs: state.data,
});

const mapDispatchToProps = {
  fetchLatest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
