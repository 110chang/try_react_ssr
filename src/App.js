import React, { Component } from 'react'
import styled from 'styled-components'
import Logo from './logo.svg'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

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
        <Title>Hello, world!</Title>
        <p>{name}</p>
        <img src={Logo} alt="" />
      </div>
    )
  }
}

export default App
