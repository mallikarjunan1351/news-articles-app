import React, { useContext } from 'react';
import { ArticlesContext } from '../context/ArticlesContext';
import HomeContainer from '../containers/HomeContainer';
import './Home.css';

const Home = () => {
  const { handlePeriodSelect } = useContext(ArticlesContext);

  const handlePeriodChange = (e) => {
    handlePeriodSelect(e.target.value);
  }

  return (
    <div className="home">
      <div className="home-header">
      <h1>Most Popular Articles</h1>
        <select onChange={handlePeriodChange}>
          <option value="1">Select Period</option>
          <option value="1">1 Day</option>
          <option value="7">7 Day</option>
          <option value="30">30 Day</option>
        </select>
      </div>
      <HomeContainer/>
    </div>
  );
};

export default Home;
