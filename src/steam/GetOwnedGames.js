import React, { Component } from 'react';
import '../App.css';

class GetOwnedGames extends Component {
  constructor() {
    super();
    this.state = {
      games: [],
    }
  };

  componentWillMount() {
    fetch('/GetOwnedGames')
    .then(response => {
      return response.json();
    }).then(gamesData => {
      let games = gamesData.response.games.map((game) => {
        return (
          <div>
          {game.name}
          </div>
        )
      })
      this.setState({games: games});
      })
  }


  render() {
    return (
      <div>
        {this.state.games}
      </div>
    )
  }
}

export default GetOwnedGames;