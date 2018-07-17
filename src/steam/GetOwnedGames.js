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
    fetch('http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=03FB5D038F45D678FCE81681D5E35A44&steamid=76561197960434622&include_played_free_games=1&include_appinfo=1&format=json')
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