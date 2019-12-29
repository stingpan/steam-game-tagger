const express = require('express');
const request = require('request');
const app = express();

app.get('/GetOwnedGames', (req, res) => {
  request.get({
    url: 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=03FB5D038F45D678FCE81681D5E35A44&steamid=76561197990196942&include_appinfo=1&format=json',
    json: true,
  }, (error, request, body) => {
    res.json(body);
  });
});

app.listen(8080);
