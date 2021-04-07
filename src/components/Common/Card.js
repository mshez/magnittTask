import React from 'react';
import { withRouter } from 'react-router-dom';

function Card({ data, history }) {
  const onNavigate = (path) => {
    window.location.pathname = path;
  };
  return (
    <div className="max-w-md mx-auto my-4 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-full w-full object-cover md:w-48"
            src={data.image}
            alt="Man looking at item at a store"
          />
        </div>
        <div className="p-8">
          <button
            type="button"
            onClick={() => onNavigate(`/${data.slug}`)}
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {data.title}
          </button>
          <p className="mt-2 text-gray-500">{data.description}</p>
          <div className="flex flex-row mt-2">
            {data.tags.split(',').map((tag) => (
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
  );
}
export default withRouter(Card);
