import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleDetails from './ArticleDetails';

const mockArticle = {
  title: 'Test Title',
  description: 'Test Description',
  content: 'Test Content',
};

test('renders ArticleDetails component', () => {
  render(<ArticleDetails article={mockArticle} />);
  
  expect(screen.getByText('Test Title')).toBeInTheDocument();
  expect(screen.getByText('Test Content')).toBeInTheDocument();
});
