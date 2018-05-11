import React, { Component } from 'react'

import { Howl, Howler } from 'howler'

const sound = new Howl({
  src: ['../the-prodigy-smack-my-bitch-up.mp3']
})

sound.play()

class App extends Component {
  render () {
    return 'hello'
  }
}

export default App
