import React, { Component } from 'react'
import { Bar } from 'react-blessed-contrib'

export default class App extends Component {
  constructor() {
    super()
    this.data = {
      titles: [
        'one'
      ],
      data: [
        20
      ]
    }
  }

  render() {
    return (
      <Bar
        label='bar1'
        maxHeight='30'
        top='center'
        left='center'
        height='30%'
        width='50%'
        border={{type: 'line'}}
        style={{border: {fg: 'blue'}}}
        data={this.data} />
    )
  }
}
