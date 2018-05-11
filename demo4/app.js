import React, { Component } from "react";
import { Grid, Line } from "react-blessed-contrib";
import fetch from "node-fetch";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.url = "https://api.github.com/repos/lirantal/dockly";

    this.state = {
      line: {
        title: "Stars",
        style: {
          line: "green"
        },
        x: [this.getTime()],
        y: [0]
      }
    };
  }

  componentDidMount() {
    setInterval(this.triggerUpdate.bind(this), 5000);
  }

  getTime() {
    const date = new Date();
    return `${date.getMinutes()}:${date.getSeconds()}`;
  }

  triggerUpdate() {
    const data = this.state.line;
    // data.x.push(this.getTime())
    // data.y.push(50)
    // this.setState({ line: data })

    return fetch(this.url)
      .then(res => res.json())
      .then(json => {
        data.x.push(this.getTime());
        data.y.push(json.stargazers_count);
        this.setState({ line: data });
      });
  }

  render() {
    return (
      <Grid rows={12} cols={12}>
        <Line
          row={1}
          col={1}
          rowSpan={6}
          colSpan={6}
          maxY={1300}
          label="Dockly Popularity"
          showLegend
          data={this.state.line}
        />
      </Grid>
    );
  }
}
