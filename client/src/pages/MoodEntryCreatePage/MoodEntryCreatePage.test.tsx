import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import MoodEntryCreatePage from './MoodEntryCreatePage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <MoodEntryCreatePage />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
