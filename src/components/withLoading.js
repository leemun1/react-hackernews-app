import React from 'react';


export const Loading = () =>
  <div className="LoadingMessage">Loading...</div>

const withLoading = (Component) => ({ isLoading, ...rest }) =>
  isLoading
  ? <Loading />
  : <Component { ...rest } />

export default withLoading;