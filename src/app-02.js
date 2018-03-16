import React, { Component } from 'react'
import { Grid, Donut, Sparkline, Bar, Table, Lcd, Line, Map, Log, Gauge } from 'react-blessed-contrib'

export default class App extends Component {
  constructor() {
    super()
    this.barData = {
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
        label='something'
        maxHeight='30'
        data={this.barData} />
    )
  }
}
