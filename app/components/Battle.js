import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FaUserFriends, FaFighterJet, FaTrophy } from 'react-icons/fa'

class PlayerInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.onSubmit(this.state.username)
  }
  render() {
    return (
      <form className='column player' onSubmit={this.handleSubmit}>
        <label htmlFor='username' className='player-label'>
          {this.props.label}
        </label>
        <div className='row player-inputs'>
          <input
            type='text'
            id='username'
            className='input-light'
            placeholder='github username'
            autoComplete='off'
            value={this.state.username}
            onChange={this.handleChange}
          />
          <button
            className='btn dark-btn'
            type='submit'
            disabled={!this.state.username}
          >
            Submit
          </button>
        </div>
      </form>
    )
  }
}
PlayerInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

function Instructions () {
  return (
    <div className='instructions-container'>
      <h1 className='center-text header-lg'>
        Instructions
      </h1>
      <ol className='container-sm grid center-text battle-instructions'>
        <li>
          <h3 className='header-sm'>Enter two Github users</h3>
          <FaUserFriends className='bg-light' color='rgb(255, 191, 116)' size={140} />
        </li>
        <li>
          <h3 className='header-sm'>Battle</h3>
          <FaFighterJet className='bg-light' color='#727272' size={140} />
        </li>
        <li>
          <h3 className='header-sm'>See the winners</h3>
          <FaTrophy className='bg-light' color='rgb(255, 215, 0)' size={140} />
        </li>
      </ol>
    </div>
  )
}

export default class Battle extends Component {
  constructor(props) {
    super(props)

    this.state = {
        playerOne: null,
        playerTwo: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  handleSubmit(id,player) {
    this.setState({
      [id]: player
    })
  }
  
  render() {
    const { playerOne, playerTwo } = this.state
    return (
      <>
        <Instructions/>

        <div className='players-container'>
          <h1 className='center-text header-lg'>Players</h1>
          <div className='row space-around'>
            {
              playerOne===null && (
              <PlayerInput label={"Player 1"} onSubmit={(playerName)=> this.handleSubmit('playerOne', playerName)}/>
            )}
            {
              playerTwo===null && (
              <PlayerInput label={"Player 2"} onSubmit={(playerName)=> this.handleSubmit('playerTwo', playerName)}/>
            )}
          </div>
        </div>
      </>
    )
  }
}
