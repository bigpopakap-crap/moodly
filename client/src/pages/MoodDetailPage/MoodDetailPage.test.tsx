import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import MoodDetailPage from './MoodDetailPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <MoodDetailPage />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
