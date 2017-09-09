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
      <Bar
        label='clock'
        maxHeight='59'
        top='center'
        left='center'
        height='50%'
        width='30%'
        border={{type: 'line'}}
        style={{border: {fg: 'blue'}}}
        data={this.state.bar}
      />
    )
  }
}
