var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");
// var sequelize = new Sequelize ('screenmatch_db', 'root');


var Favorites = sequelize.define("favorites", {
  omdbID: Sequelize.STRING,
  is_favorite: Sequelize.BOOLEAN,
  watchlist_rank: Sequelize.INTEGER,
  userID: Sequelize.STRING
});



Favorites.sync();

module.exports = Favorites;


