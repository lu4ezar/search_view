import React from 'react';
import { RouteComponentProps, Link } from '@reach/router';
import './NotFound.scss';

const ErrorPage = (props: RouteComponentProps) => (
  <div className="container not-found">
    <div>Not Found</div>
    <div className="home-link">
      <Link to="/">Back to Homepage</Link>
    </div>
  </div>
);

export default ErrorPage;
