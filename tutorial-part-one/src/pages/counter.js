import React from 'react'

class Counter extends React.Component {
  constructor () {
    super()
    this.state = {count: 0}
  }
  handlePlus = e => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }
  handleMinus = e => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }))
  }
  render () {
    return (
      <div>
        <h1>Counter</h1>
        <p>current count: {this.state.count}</p>
        <button onClick={this.handlePlus}>plus</button>
        <button onClick={this.handleMinus}>minus</button>
      </div>
    )
  }
}

export default Counter
