import React, { useCallback, useState } from 'react';

const Comment = ({ data }) => {
  const [like, setLike] = useState(data.liked);
  return (
    <div className="flex flex-col m-5 mb-10">
      <div className="flex flex-row items-center">
        <div className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
          {(!data.user.image && (
            <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )) || <img src={data.user.image} alt="user" />}
        </div>
        <p className="text-lg text-black font-semibold ml-3">{data.user.name}</p>
      </div>
      <p className="mt-3 ml-1 text-sm">{data.comment}</p>
      <div className="flex flex-row mt-3">
        <button
          type="button"
          className="w-5 cursor-pointer  focus:outline-none"
          onClick={() => setLike(true)}
        >
          <svg
            viewBox="0 0 22 20"
            className={`fill-current ${(like && 'text-green-300') || 'text-gray'}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.74.04a2.013 2.013 0 00-1.58 1.88c-.11 2.795-.485 4.45-2.283 6.946a1.272 1.272 0 00-1.065-.58h-4.55C.573 8.287 0 8.84 0 9.507v8.773c0 .667.572 1.218 1.263 1.218h4.55c.435 0 .821-.22 1.049-.548.263.204.506.387.758.533.417.24.887.384 1.532.45 1.29.128 3.403.032 8.283.052a.53.53 0 00.317-.113c1.224-.667 4.255-5.775 4.248-10.534-.026-1.138-.542-1.78-1.532-1.78H13.96c.388-2.47.131-4.738-.735-6.208C12.76.555 12.078.111 11.403.018a2.035 2.035 0 00-.663.022m2.154 7.912c-.055.28.201.58.498.58h6.934c.356.035.67.091.67.913 0 1.047-.168 2.886-1.031 5.057-.865 2.172-2.155 4.531-2.603 4.455-1.215.08-7.014.109-8.108 0-.556-.056-.818-.135-1.113-.306-.266-.152-.59-.423-1.066-.791v-7.6c2.349-2.88 2.979-5.302 3.096-8.3.338-1.495 1.702-1.082 2.179-.13.697 2.402.879 4.442.544 6.122M1.263 9.262h4.55c.148 0 .251.1.251.244v8.773c0 .144-.103.243-.252.243h-4.55c-.148 0-.251-.099-.251-.243V9.506c0-.144.103-.244.252-.244" />
          </svg>
        </button>
        <button
          type="button"
          className="ml-2 w-5 cursor-pointer focus:outline-none"
          onClick={() => setLike(false)}
        >
          <svg
            viewBox="0 0 22 20"
            xmlns="http://www.w3.org/2000/svg"
            className={`fill-current ${(!like && 'text-red-500') || 'text-gray'}`}
          >
            <path d="M11.26 19.96a2.013 2.013 0 001.58-1.881c.11-2.794.484-4.45 2.282-6.945.224.345.618.58 1.066.58h4.548c.692 0 1.264-.553 1.264-1.22V1.722c0-.668-.572-1.22-1.264-1.22h-4.548c-.436 0-.823.22-1.05.55a6.898 6.898 0 00-.759-.534c-.416-.24-.887-.384-1.531-.45C11.558-.06 9.445.037 4.564.017a.521.521 0 00-.316.114C3.023.796-.007 5.904 0 10.663c.025 1.138.541 1.78 1.532 1.78H8.04c-.39 2.47-.131 4.738.735 6.208.467.794 1.148 1.238 1.823 1.331a2.034 2.034 0 00.663-.022m-2.155-7.913c.056-.28-.202-.579-.497-.579H1.674c-.356-.035-.67-.091-.67-.913 0-1.047.166-2.886 1.031-5.057C2.9 3.326 4.19.967 4.638 1.044c1.214-.081 7.014-.109 8.108 0 .556.055.818.134 1.113.305.265.152.59.423 1.066.791v7.6c-2.349 2.88-2.979 5.302-3.096 8.3-.338 1.495-1.702 1.083-2.179.13-.697-2.402-.88-4.442-.545-6.123m11.631-1.309h-4.548c-.149 0-.252-.1-.252-.244V1.722c0-.144.103-.244.252-.244h4.548c.15 0 .253.1.253.244v8.772c0 .144-.103.244-.253.244" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default function Comments({ data, handlePostComment }) {
  const [comments, setComments] = useState(data);
  const [newComment, setNewComment] = useState('');
  const [error, setError] = useState(false);

  const validate = useCallback(() => {
    if (!newComment) {
      setError(true);
      return false;
    }
    setError(false);
    return true;
  }, [newComment]);

  const handleAddComment = () => {
    // For API call
    // handlePostComment(newComment);
    if (validate()) {
      const newComments = [
        ...comments,
        { comment: newComment, user: { name: 'Victor Galindo' }, id: 10 },
      ];
      setComments(newComments);
      setNewComment('');
    }
  };

  const handleInputChange = useCallback(
    (e) => {
      validate();
      setNewComment(e.target.value);
    },
    [validate]
  );

  return (
    <div className="max-w-md mx-auto my-4 bg-white rounded-xl shadow-md md:max-w-2xl overflow-hidden">
      <h2 className="m-5 py-2 text-2xl border-b border-gray-200">Conversations</h2>
      <div className="flex flex-col items-end m-5 mb-0">
        <input
          value={newComment}
          type="text"
          name="first_name"
          id="first_name"
          placeholder="What do you think?"
          className={`p-2 py-4 block w-full shadow-sm sm:text-sm border ${
            (error && 'border-red-500') || 'border-gray-200'
          } rounded-md`}
          onChange={handleInputChange}
        />
        <button
          type="button"
          className="text-base px-10 py-2 mt-4 px-4 py-1 text-sm text-blue-500 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={() => handleAddComment()}
        >
          Post comment
        </button>
      </div>
      {comments.map((comment) => {
        return <Comment key={comment.id} data={comment} />;
      })}
    </div>
  );
}
