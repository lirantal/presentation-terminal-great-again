import React from 'react'
import blessed from 'blessed'
import { render } from 'react-blessed'

import App from './app-05'

const screen = blessed.screen()

// allow the user to quit the program
screen.key(['escape', 'q', 'C-c'], (ch, key) => {
  process.exit(0)
})

render(<App screen={screen} />, screen)
