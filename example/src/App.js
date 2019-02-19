import React, { Component } from 'react'
import {ExampleComponent, CardNumber, PaymentInfo} from 'eax-lockbox'

const onSubmit = values => {
  console.log(values)
}

export default class App extends Component {
  render () {
    return (
      <div>
        <PaymentInfo onSubmit={onSubmit} />
      </div>
    )
  }
}
