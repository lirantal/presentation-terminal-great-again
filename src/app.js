import React, { Component } from 'react'
import { Bar } from 'react-blessed-contrib'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bar: {
        titles: [
          'bar1'
        ],
        data: [
          50
        ]
      }
    }
  }

  render() {
    return (
      <Bar
        label='bar'
        maxHeight='59'
        border={{type: 'line'}}
        style={{border: {fg: 'blue'}}}
        data={this.state.bar}
      />
    )
  }
}
