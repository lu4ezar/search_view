import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

const ErrorPage = () => (
  <div className="container not-found">
    <div>Not Found</div>
    <div className="home-link">
      <Link to="/">Back to Homepage</Link>
    </div>
  </div>
);

export default ErrorPage;
