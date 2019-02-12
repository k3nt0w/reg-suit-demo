import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonPanel from '../component/ButtonPanel';
import '../component/ButtonPanel.css';

storiesOf('ButtonPanel', module)
  .add('normal', () => (
    <ButtonPanel
      clickHandler={() => console.log('click handler')}
    />
  ));
