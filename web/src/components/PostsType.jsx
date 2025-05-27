import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/data';

function PostList() {
  return (
    <section className="container mt-4">
      <h2 className="mb-4">Posts sobre qualquer coisa <br />:)</h2>
      {posts.map((post) => 
        <div
          key={post.id}
          className="row mb-3 px-4 py-3 bg-white text-dark rounded border shadow-sm"
        >
          <div className="col-12 d-flex justify-content-between align-items-center flex-wrap">
            <div className="me-3 flex-grow-1 text-start">
              <h5 className="mb-1">{post.title}</h5>
              <h6 className="mb-0">{post.subtitle.slice(0, 100)}</h6>
            </div>
            <div className="mt-2 mt-md-0">
              <Link to={`/blog/${post.id}`} className="btn btn-outline-dark btn-sm">
                Ver mais
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default PostList;
