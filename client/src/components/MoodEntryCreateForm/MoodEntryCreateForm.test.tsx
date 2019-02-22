import React from 'react';
import ReactDOM from 'react-dom';
import MoodEntryCreateForm from './MoodEntryCreateForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MoodEntryCreateForm onCreate={() => {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
