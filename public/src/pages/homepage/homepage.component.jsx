import React from 'react';
import { Link } from 'react-router-dom';

import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
import title from '../../../dist/assets/hp_title.png';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
  <HomePageContainer>
    <div className="home-bg">
      <img className="home-title" src={title} alt="title"></img>
      <Link className="home-button" to="/shop">
        <h1 className="button-title">SHOP NOW</h1>
      </Link>
    </div>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
