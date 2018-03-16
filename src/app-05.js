import React, { Component } from 'react'
import { Grid, Line } from 'react-blessed-contrib'
import fetch from 'node-fetch'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.url = 'https://api.github.com/repos/lirantal/dockly'

    this.data =
        {
          title: 'USA',
          style: {
            line: 'green'
          },
          x: [this.getTime()],
          y: [0]
        }

    this.state = {
      data: [this.data]
    }
  }

  componentDidMount() {
    setInterval(this.triggerUpdate.bind(this), 5000)
  }

  getTime() {
    const date = new Date()
    return `${date.getMinutes()}:${date.getSeconds()}`
  }

  triggerUpdate() {
    
      this.data.x.push(this.getTime())
      this.data.y.push(50)

      this.setState({data: [this.data]})

    // return fetch(this.url)
    //   .then(res => res.json())
    //   .then(json => {
    //     console.log(json.stargazers_count)
    //     this.data.x.push(this.getTime())
    //     this.data.y.push(json.stargazers_count)
    //
    //     this.setState({data: [this.data]})
    //   })
  }

  render() {
    return (
      <Grid rows={12} cols={12}>
        <Line row={1} col={1} rowSpan={6} colSpan={6}
          maxY={250}
          label='Dockly Popularity'
          showLegend={true}
          data={this.state.data}
        />
      </Grid>
    )
  }
}
