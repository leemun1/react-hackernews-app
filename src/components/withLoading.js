import React from 'react';

import '../styles/Loading.css';

export const Loading = () =>
  <div className="LoadingMessage">Loading...</div>

const withLoading = (Component) => ({ isLoading, ...rest }) =>
  isLoading
  ? <Loading />
  : <Component { ...rest } />

export default withLoading;