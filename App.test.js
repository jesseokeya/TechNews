import React from 'react';
import renderer, { it, expect } from 'react-test-renderer';
import App from './App';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
