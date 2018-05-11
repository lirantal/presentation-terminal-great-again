import React, { Component } from "react";
import { Bar, Grid } from "react-blessed-contrib";

export default class App extends Component {
  constructor() {
    super();
    this.data = {
      titles: ["one"],
      data: [100]
    };
  }

  render() {
    return (
      <Grid rows={12} cols={12}>
        <Bar
          row={3}
          col={3}
          rowSpan={6}
          colSpan={6}
          label="i am a bar"
          maxHeight="100"
          // top='0'
          // left='0'
          // height='3%'
          // width='5%'
          border={{ type: "line" }}
          style={{ border: { fg: "blue" } }}
          data={this.data}
        />
      </Grid>
    );
  }
}
