import styles from './Snippet.css';

import React, { Component } from 'react';

export default class Snippet extends Component {

  render() {
    return (
      <div>
        {
          this.props.files.map(file => (
            <div key={file.name} className={styles.file}>
              <div className={styles.fileName}>{ file.name }</div>
              <pre className={styles.pre}>{ file.source }</pre>
            </div>
          ))
        }
      </div>
    );
  }

};
