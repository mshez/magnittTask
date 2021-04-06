import React from 'react';
import { connect } from 'react-redux';
import { fetchLatest } from '../store';

class Home extends React.Component {
  onNavigate(path) {
    window.location.pathname = path;
  }

  render() {
    const { latestBlogs, history } = this.props;

    return (
      <div className="container md:max-w-2xl max-w-md mx-auto">
        {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
        <p className="text-3xl">Latest blogs</p>
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
                  onClick={() => this.onNavigate(`/${blog.slug}`)}
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
                      className="colors.blueGray border-2 px-1 mx-1"
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
