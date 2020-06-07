import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import { hot } from 'react-hot-loader/root';
import Demo from './demo';
import './styles.css';

export const App = hot(() => (
  <div className="app">
    <Demo />
  </div>
));
