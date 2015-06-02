import GlobalSelectors from './GlobalSelectors';

import React, { Component } from 'react';

import js from '!!raw!./GlobalSelectors.js';
import css from '!!raw!./GlobalSelectors.css';
import Snippet from 'shared/Snippet/Snippet';

export default class GlobalSelectorsDemo extends Component {

  render() {
    return (
      <div>
        <br />
        <GlobalSelectors />
        <br />
        <Snippet files={[
          { name: 'GlobalSelectors.js', source: js },
          { name: 'GlobalSelectors.css', source: css }
        ]} />
      </div>
    );
  }

};
