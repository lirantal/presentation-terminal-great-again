import React, { Component } from 'react'
import { Bar, Grid, Line } from 'react-blessed-contrib'
import fetch from 'node-fetch'

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
    setInterval(this.updateStarsGraph.bind(this), 5000)
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

  updateStarsGraph() {
    const stars = this.state.stars
    const time = new Date()
    const timeStr = `${time.getMinutes()}:${time.getSeconds()}`

    return fetch('https://api.github.com/repos/lirantal/dockly')
      .then(res => res.json())
      .then(json => {
        stars.x.push(timeStr)
        stars.y.push(json.stargazers_count)
        this.setState({data: stars})
      })
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
