import React from 'react';
import glamorous from 'glamorous';

// style
const FullPage = glamorous.div({
  height: '100vh',
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

function NoNavCenteredPageWrapper(props) {
  return <FullPage className="container is-fluid">{props.children}</FullPage>;
}

export default NoNavCenteredPageWrapper;
