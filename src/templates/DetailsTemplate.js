import React from 'react';
import { Link } from 'react-router-dom';
import UserPageTemplate from './UserPageTemplate';

const DetailsTemplate = () => (
  <UserPageTemplate>
    <h1>Notes</h1>
    <p>
      ascassaochocihasoichc asjkdhaskjdhkasjhdkjas djkasdhkuwqyieuqwygekjasbd askudhaskdb asdhb
      aksdhsaiuh baskjdhaisdhaskjdh jzcheskdhufk jsdhcuisdhf kcvsdkjvh ksdfjhvkjh ksdjvh kdsjvh
    </p>
    <Link to="/">go back</Link>
  </UserPageTemplate>
);

export default DetailsTemplate;
