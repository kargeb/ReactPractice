import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import PropTypes from 'prop-types';
import { routes } from 'routes';

const DetailsPage = ({ match }) => (
  <DetailsTemplate>
    <p> {`is twitter :  ${match.path === routes.twitter}  `} </p>
  </DetailsTemplate>
);

DetailsPage.propTypes = {
  match: PropTypes.string.isRequired,
};

export default DetailsPage;
