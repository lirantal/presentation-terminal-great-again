import React, { Component } from 'react'
import blessed from 'blessed'
import { render } from 'react-blessed'

import App from './app'

const screen = blessed.screen()

render(<App screen={screen} />, screen)
