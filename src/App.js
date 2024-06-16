import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ArticlesProvider from './context/ArticlesContext';
import { Skeleton } from 'antd';
import './styles/main.scss';

const Home = lazy(() => import('./pages/Home'));
const ArticleDetails = lazy(() => import('./containers/ArticleDetailsContainer'));

const App = () => {
  return (
    <Router>
      <ArticlesProvider>
      <Navbar />
      <Suspense fallback={<Skeleton active />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<ArticleDetails  />} />
        </Routes>
      </Suspense>
      </ArticlesProvider>
    </Router>
  );
};

export default App;
