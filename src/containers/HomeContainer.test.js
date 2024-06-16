import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeContainer from './HomeContainer';
import { ArticlesContext } from '../context/ArticlesContext';

const mockArticles = [
  { title: 'Test Title 1', description: 'Test Description 1' },
  { title: 'Test Title 2', description: 'Test Description 2' },
];

const mockSelectedArticle = {
  title: 'Selected Test Title',
  description: 'Selected Test Description',
  content: 'Selected Test Content',
};

const renderWithContext = (component, contextValues) => {
  return render(
    <ArticlesContext.Provider value={contextValues}>
      {component}
    </ArticlesContext.Provider>
  );
};

test('renders HomeContainer with ArticleList', () => {
  renderWithContext(<HomeContainer />, { articles: mockArticles, selectedArticle: null });
  
  expect(screen.getByText('Test Title 1')).toBeInTheDocument();
  expect(screen.getByText('Test Title 2')).toBeInTheDocument();
});

test('renders HomeContainer with ArticleDetails', () => {
  renderWithContext(<HomeContainer />, { selectedArticle: mockSelectedArticle });
  
  expect(screen.getByText('Selected Test Title')).toBeInTheDocument();
  expect(screen.getByText('Selected Test Content')).toBeInTheDocument();
});
