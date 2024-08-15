// File: App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductsPage from './pages/ProductsPage'; // Đảm bảo import đúng tên
import App from './App';

test('renders products page', () => {
  render(<App />);
  const linkElement = screen.getByText(/High quality stainless steel pot/i);
  expect(linkElement).toBeInTheDocument();
});
