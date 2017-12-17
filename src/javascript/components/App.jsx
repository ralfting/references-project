import React from 'react';
import { Router } from 'react-router-dom';
import history from '../history';

import TopBar from './TopBar';

export default function App() {
  return (
    <Router history={history}>
      <TopBar title="References Project" />
    </Router>
  );
}
