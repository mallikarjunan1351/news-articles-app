import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleList from './ArticleList';
import { ArticlesContext } from '../context/ArticlesContext';

const mockArticles = [
  { title: 'Test Title 1', description: 'Test Description 1' },
  { title: 'Test Title 2', description: 'Test Description 2' },
];

const renderWithContext = (component) => {
  return render(
    <ArticlesContext.Provider value={{ articles: mockArticles }}>
      {component}
    </ArticlesContext.Provider>
  );
};

test('renders ArticleList component', () => {
  renderWithContext(<ArticleList />);
  
  expect(screen.getByText('Test Title 1')).toBeInTheDocument();
  expect(screen.getByText('Test Title 2')).toBeInTheDocument();
});
