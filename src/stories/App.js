import React from 'react';
import { storiesOf } from '@storybook/react';
import App from '../component/App';
import '../component/App.css';

storiesOf('App', module).add('normal', () => <App />);
