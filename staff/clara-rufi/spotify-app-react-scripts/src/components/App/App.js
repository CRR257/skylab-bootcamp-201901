import React, { Component } from 'react';
import Album from '../Album/album.js'
import Login from '../Login/index'
import Artists from '../Artists/artists.js';
import Track from '../Track/track.js';
import Tracks from '../Tracks/tracks.js';
import Search from '../Search/search.js';
import logic from '../../Logic/index'

import '../../components/main.sass'



class App extends Component { //app pot compartir info amb tots els fills, canvis d'estat
    state = { artists: null, color: null, albums: [], tracks: null, track: null, loginVisual: true, searchVisual: false, artistsVisual: false, albumsVisual: false, tracksVisual: false, trackVisual: false }

    handleLogin = (email,password) => {
        try {
            logic.login(email, password, user => {
                console.log(user)
            })
            this.setState({loginVisual:false, searchVisual:true} )
        } catch (error) {
            console.log(error.message)
        }
    }

    // onChange =() =>{
    //     this.setState({color:'green'? "red": 'green'})
    // }

    onGoBackArtists= () => {
        this.setState({albumsVisual: false, artistsVisual: true})
    }
    onGoBackAlbums = () =>{
        this.setState({tracksVisual:false, albumsVisual: true})
    }
 
    onGoBackTracks = () =>{
        this.setState({tracksVisual:true, trackVisual:false})
    }

    setTrack = track => {
        this.setState({ track, tracksVisual: false, trackVisual: true })
    }

    setTracks = tracks => {
        this.setState({ tracks, albumsVisual: false, tracksVisual: true })
    }

    setAlbums = albums => {
        this.setState({ albums, artistsVisual: false, albumsVisual: true })
    }

    setArtists = artists => this.setState({ artists, artistsVisual: true, albumsVisual: false ,  tracksVisual: false,  trackVisual: false})
    //setstate actualitza l'estat
    // this.props.setArtists(artists)(dins de searchpanel) ho passem a aquests setArtists = artists, i quan canvii de valor, q actualitzi l'estat amb setartist


    render() {

        return <main>
            <header className="text-center">
            <h2>App Spotify</h2>    
            </header>

            {this.state.loginVisual && <Login onLogin={this.handleLogin}/>}
            {this.state.searchVisual &&<Search setArtists={this.setArtists} />}
            {this.state.artistsVisual && <Artists artists={this.state.artists} artistsVisual={this.state.artistsVisual} setAlbums1={this.setAlbums} />}
            {this.state.albumsVisual && <Album setTracks={this.setTracks} albums={this.state.albums} albumVisual={this.state.artistsVisual} onGoBackArtists={this.onGoBackArtists} />}
            {this.state.tracksVisual && <Tracks tracks={this.state.tracks} tracksVisual={this.state.tracksVisual} setTrack={this.setTrack} onGoBackAlbums={this.onGoBackAlbums}/>}
            {this.state.trackVisual && <Track track={this.state.track} trackVisual={this.state.trackVisual} onGoBackTracks={this.onGoBackTracks} onChange={this.onChange}/>}
        </main>
    }
}

export default App;
