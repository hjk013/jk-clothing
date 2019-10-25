import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';

import './homepage.styles.scss';
// import Directory from '../../components/directory/directory.component';
// import title from '../../../dist/assets/hp_title.png';

import { HomePageContainer } from './homepage.styles';

const Directory = lazy(() =>
  import('../../components/directory/directory.component')
);
const title = lazy(() => import('../../../dist/assets/hp_title.png'));

const HomePage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <HomePageContainer>
      <div className="home-bg">
        <img className="home-title" src={title} alt="title"></img>
        <Link className="home-button" to="/shop">
          <h1 className="button-title">SHOP NOW</h1>
        </Link>
      </div>
      <Directory />
    </HomePageContainer>
  </Suspense>
);

export default HomePage;
