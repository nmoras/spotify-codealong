import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './components/Player';
import { useDataLayerValue } from './DataLayer';



//super object
const spotify = new SpotifyWebApi();

function App() {
  const[ token, setToken ] = useState(null);
  const [dispatch] = useDataLayerValue();

  
  useEffect( () => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;
    
    if(_token){
      setToken(_token)
      spotify.setAccessToken(_token);
      spotify.getMe().then( (user) => {
        //SET_user is the listener
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
     spotify.getUserPlaylists().then( (playlists) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlists,
      });
    });
  }
  
  //  console.log('i have token', token)
  }, [dispatch]);

  return (
    //BEM convention
    <div className="App">
      {
        token ? (
          <Player />
        ) : (
          <Login/>
        )
      }
 
    </div>
  );
}

export default App;
