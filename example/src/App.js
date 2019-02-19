import React, { Component } from 'react'
import {ExampleComponent, CardNumber} from 'eax-lockbox'


export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent text='Modern React component module' />
        <CardNumber />
      </div>
    )
  }
}
