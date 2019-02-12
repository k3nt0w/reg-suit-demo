import React from 'react';
import { storiesOf } from '@storybook/react';
import Display from '../component/Display';
import '../component/Display.css';

storiesOf('Display', module)
  .add('normal', () => (
    <Display
      value="12345"
    />
  ));
