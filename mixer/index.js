import React from 'react'
import blessed from 'blessed'
import { render } from 'react-blessed'
import App from './app'

const screen = blessed.screen()
screen.key(['escape', 'q'], () => {
  process.exit(0)
})

render(<App />, screen)
