import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ArticleCard from './ArticleCard';
import { ArticlesContext } from '../context/ArticlesContext';
import { BrowserRouter as Router } from 'react-router-dom';

const mockArticle = {
  title: 'Test Title',
  description: 'Test Description',
  content: 'Test Content',
};

const mockHandleArticleSelect = jest.fn();

const renderWithContext = (component) => {
  return render(
    <ArticlesContext.Provider value={{ handleArticleSelect: mockHandleArticleSelect }}>
      <Router>{component}</Router>
    </ArticlesContext.Provider>
  );
};

test('renders ArticleCard component', () => {
  renderWithContext(<ArticleCard article={mockArticle} />);
  
  expect(screen.getByText('Test Title')).toBeInTheDocument();
  expect(screen.getByText('Test Description')).toBeInTheDocument();
});

test('calls handleArticleSelect on click', () => {
  renderWithContext(<ArticleCard article={mockArticle} />);
  
  fireEvent.click(screen.getByText('Test Title'));
  expect(mockHandleArticleSelect).toHaveBeenCalledWith(mockArticle);
});
