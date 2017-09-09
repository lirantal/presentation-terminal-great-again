import React, { Component } from 'react'
import { Bar, Grid, Line } from 'react-blessed-contrib'

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
      },
      stars: {
        title: 'Dockly Stars',
        x: [0, 1],
        y: [100, 100]
      }
    }
  }

  componentDidMount() {
    setInterval(this.updateClock.bind(this), 1000)
  }

  updateClock() {
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    const barClock = {}
    barClock.titles = ['hours', 'minutes', 'seconds']
    barClock.data = [hours, minutes, seconds]

    this.setState({bar: barClock})
  }

  render() {
    return (
      <Grid rows={12} cols={12}>
        <Line row={2} col={1} rowSpan={8} colSpan={6}
          maxY={300}
          label='Dockly Stars Popularity'
          showLegend={true}
          data={this.state.stars}
        />
        <Bar row={2} col={8} rowSpan={8} colSpan={3}
          label='clock'
          maxHeight='59'
          barWidth={10}
          barSpacing={5}
          xOffset={4}
          data={this.state.bar}
        />
      </Grid>
    )
  }
}
