import React from 'react'
import blessed from 'blessed'
import { render } from 'react-blessed'

import App from './app'

// Create a screen
const screen = blessed.screen()

// Allow the user to quit the program
screen.key(['escape', 'q'], () => {
  process.exit(0)
})

// Render the screen
render(<App screen={screen} />, screen)
