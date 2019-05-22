import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
  <div>
    <GlobalStyle />
    <h1>Hello Pies</h1>
    <Button width={100}>Open / Close</Button>
    <Button secondary>Remove</Button>
  </div>
);

export default Root;
