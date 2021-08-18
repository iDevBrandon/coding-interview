import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Star boy", duration: "3:23" },
    { title: "Friends", duration: "2:13" },
    { title: "Stay", duration: "1:13" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
