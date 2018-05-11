import React, { Component } from 'react'
import { Line, Grid } from 'react-blessed-contrib'

export default class App extends Component {
  constructor () {
    super()
    this.data = [
      {
        title: 'Stars',
        style: {
          line: 'green'
        },
        x: ['0', '1'],
        y: [0, 100]
      }
    ]
  }

  render () {
    return (
      <Grid rows={12} cols={12}>
        <Line
          row={1}
          col={1}
          rowSpan={6}
          colSpan={6}
          maxY={500}
          label='Dockly Popularity'
          showLegend
          legend={{
            width: 10
          }}
          data={this.data}
        />
      </Grid>
    )
  }
}
