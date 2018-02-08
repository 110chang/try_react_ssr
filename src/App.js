import React, { Component } from 'react'
import Logo from './logo.svg'

class App extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  componentWillMount() {
    console.log('will mount')
  }
  componentDidMount() {
    console.log('did mount')
  }
  render() {
    const { name } = this.props
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>{name}</p>
        <img src={Logo} alt="" />
      </div>
    )
  }
}

export default App
