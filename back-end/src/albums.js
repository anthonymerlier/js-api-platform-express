const AlbumModel = require("./models/Album");

let Albums = [];
const AlbumList = AlbumModel.find({}).exec((err, albums) => {
  for (let album of albums) {
    Albums.push(album);
  }
});

module.exports = Albums;
