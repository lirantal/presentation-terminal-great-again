import React, { Component } from 'react'
import {
  Grid,
  Donut,
  Sparkline,
  Bar,
  Table,
  Lcd,
  Line,
  Map,
  Log,
  Gauge
} from 'react-blessed-contrib'

export default class App extends Component {
  constructor() {
    super()
    this.barData = {
      titles: ['one'],
      data: [20]
    }
  }
  render() {
    const config = {
      label: 'Server Utilization (%)',
      barWidth: 4,
      barSpacing: 6,
      xOffset: 2,
      maxHeight: 30
    }

    return (
      <Grid rows={12} cols={12}>
        <Bar
          row={2}
          col={2}
          rowSpan={8}
          colSpan={8}
          label={config.label}
          barWidth={config.barWidth}
          barSpacing={config.barSpacing}
          xOffset={config.xOffset}
          maxHeight={config.maxHeight}
          data={this.barData}
        />
      </Grid>
    )
  }
}
