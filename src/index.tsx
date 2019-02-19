/**
 * @class ExampleComponent
 */

import * as React from 'react';

import styles from './styles.css'

export type Props = { text: string }

import CardNumber from './components/CardNumber/CardNumber';
import {PaymentInfo} from './components/PaymentInfo/PaymentInfo';

class ExampleComponent extends React.Component<Props> {
  render() {
    const {
      text
    } = this.props

    return (
      <div className={styles.test}>
        Example Component: {text}
      </div>
    )
  }
}

export {ExampleComponent, CardNumber, PaymentInfo}
