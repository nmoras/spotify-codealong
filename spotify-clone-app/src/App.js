import React, { useEffect} from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './components/Player';
import { useDataLayerValue } from './DataLayer';



//super object
const spotify = new SpotifyWebApi();

function App() {
  const[ { token }, dispatch   ] = useDataLayerValue();
   
  useEffect( () => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;
    
    if(_token){
    spotify.setAccessToken(_token);

      dispatch({
          type:"SET_TOKEN",
          token:_token,
      })

    spotify.getMe().then((user) => {
      dispatch({
          type: 'SET_USER',
          user,
        });
    });

    spotify.getUserPlaylists().then( (playlists) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists,
      });
    });

    spotify.getPlaylist('37i9dQZEVXcJZyENOWUFo7').then( (response) => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
    });

    spotify.getMyTopArtists().then( (response) => 
      dispatch({
        type:"SET_TOP_ARTISTS",
        top_artists:response,
      })
    );

    dispatch({
      type:"SET_SPOTIFY",
      spotify: s,
    })
    }
  }, [token, dispatch]);

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
