spotifyApi.token = 'BQAxE-D5yla2j5ex_o3vXMu5wKz3pt249YemrCKNNwslY5tKaM4JwEvhYWQJVGtLsZiancvJ6ZsBtSNsgSV5-audWEuhEvkdaWj4siaFxLt5gG6Nl3wygHQzGoBcu4M_Yn7edbNNWc5git7rPVhjPvOUaYbZpyjmTw'
//token => https://developer.spotify.com/console/get-artist/?id=0OdUWJ0sBjDrqHygGUXeCF

class SearchPanel extends React.Component {
    state = { search: '' }  //artists ho posem null pq dp tindrem una array d'{}

    searchArtists = event => this.setState({ search: event.target.value })

    onbuttonsubmited = event => {
        event.preventDefault()

        const { state: { search} } = this

        try {
            logic.searchArtists(search, (error, artists) => {

                if (error) console.log(error.message)
                else {
                    this.props.setArtists(artists)
                   
                    //this.setState({artists: artists}) //es el mateix q this.setState({artists})
                }
            })
        } catch (error) {
            console.log(error.message)
        }

    }
    render() {
        const { searchArtists, onbuttonsubmited } = this  //pq es una funció

        return <section className="search container">
            <h2>Search</h2>
            <form onSubmit={onbuttonsubmited}>
                <input className="searchartist" type="text" name="query" placeholder="Search an artist..." onChange={searchArtists} />
                <button className="btn btn-danger button" type="submit">Search</button>
            </form>
        </section>
    }
}
//posem entre {} pq vol dir q fem referència algo de fora de la funció o del panel

class ArtistsPanel extends React.Component {

    getartistId = id => {

        try {
            logic.retrieveAlbums(id, (error, albums) => {

                if (error) console.log(error.message)
                else {
                    this.props.setAlbums(albums)
                    console.log(albums)
                }
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    render() {
        //console.log(this.props.artists) //mostrar el obj de artistas

        const { artists } = this.props  //pq hem passat l'estat d'un pare al fill, o una funcio o un string, passen a ser props
        return <section className="resultsArtist container">
            <h3><u>Artists</u></h3>
            <div class="card-columns"> 
         
            {
                artists.map(artist => (
                    <div className="card" key={artist.id} onClick={() => this.getartistId(artist.id)} >
                         <div className="card-body_albums">
                        <h5 className="card-title">{artist.name}</h5>
                        <img className="card-img-top" src={artist.images[0] ? artist.images[0].url : "styles/sorry-image-not-available.png"} alt={artist.name} />
                    </div>
                    </div>
                ))
            }
            </div> 
            
        </section>
    }
}


class AlbumPanel extends React.Component {


    getalbumId = id => {

        try {
            logic.retrieveTracks(id, (error, tracks) => {
                console.log(tracks)

                if (error) console.log(error.message)
                else {
                    this.props.setTracks(tracks)
                    console.log(tracks)
                }
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    render() {

        const { albums } = this.props
        return <section className="resultsalbum_container">
            <h3><u>Albums</u></h3>
            <div className="card-columns"></div>
            
            {
                albums.map(album => (
                    <div className="card" key={album.id} onClick={() => this.getalbumId(album.id)} >
                        <div className="card-body">
                        <h5 className="card-title">{album.name}</h5>
                        <img className="card-img-top" src={album.images[0] ? album.images[0].url : "styles/sorry-image-not-available.png"} alt={album.name} />
                        <small className="text-album">Released date: {album.release_date}</small>
                        <p></p>
                        <small className="text-album">Total tracks: {album.total_tracks}</small>
                        </div>
                    </div>
                ))
            }
          
        </section>
    }
}

class TracksPanel extends React.Component {

    getTrackId = id => {

        try {
            logic.retrieveTrack(id, (error, track) => {
                console.log(track)

                if (error) console.log(error.message)
                else {
                    this.props.setTrack(track)
                    console.log(track)
                }
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    render() {

        
        const { tracks } = this.props
        return <section className="resultstracks_container">
            <h3><u>Tracks</u></h3>
            <div class="results_tracks"></div>
            {
                tracks.map(track => (
                    <div className="card_tracks" key={track.id} onClick={() => this.getTrackId(track.id)} >
                        <div class="card_tracks_list">{track.name}</div>
                    </div>
                ))
            }
        </section>
    }
}

class TrackPanel extends React.Component {
    // handleClick = (event) => {
    //     console.log(this.state.name);
    //   }
    //<button onClick={this.handleClick}/>
    // onbuttonsubmited = event => {
    //     event.preventDefault()

    //         try {
                    
    //                 if (error) console.log(error.message)

    //                 else {
    //                     this.props.goBacktoTracks(tracks)
    //                 }
    //         } catch (error) {

    //             console.log(error.message)
    //         }     
    //     }


    render() {
        const { track } = this.props
        

        return <section className="resultstracks_container">
            <div className="title_go_back">
            <h3><u>Track</u></h3>  
            <button className="goBack" type="submit">Go Back to Tracks</button>
            </div>
           
      
            <div className="card_title-track">{track.name}</div>
            <audio controls autoplay loop src={track.preview_url} class="player">
            </audio>

        </section>
    }
}

class App extends React.Component { //app pot compartir info amb tots els fills, canvis d'estat
    state = { artists: null, albums: null, tracks: null, track: null, artistsVisual: false, albumsVisual: false, tracksVisual: false, trackVisual: false }

    // artistsVisual => pq no es mostri el panell d'artistes. al ppi el definim com a false, q no es mostri

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

        const title = <h2>🎶 App Spotify 🎶</h2>
       

        return <main>
            <header class="text-center">
            {title}
            </header>
         
            <SearchPanel setArtists={this.setArtists} />
            {this.state.trackVisual && <TrackPanel track={this.state.track} trackVisual={this.state.trackVisual} />}
            {this.state.tracksVisual && <TracksPanel tracks={this.state.tracks} tracksVisual={this.state.tracksVisual} setTrack={this.setTrack} />}
            {this.state.albumsVisual && <AlbumPanel setTracks={this.setTracks} albums={this.state.albums} albumVisual={this.state.artistsVisual} />}
            {this.state.artistsVisual && <ArtistsPanel artists={this.state.artists} artistsVisual={this.state.artistsVisual} setAlbums={this.setAlbums} />}
        </main>

        //{this.state.artists &&  <ArtistsPanel artists={this.state.artists}/>} li diem  q com q artists= null, artists és fals, q no es mostri     
        //<ArtistsPanel artists={this.state.artist}/>   li passem el prop d'artists, q passen a ser props d'artistpanel
        //setartist canvia el estado de artist
        //<AlbumPanel setTracks={this.setTracks} => serveix per conectar el panell App amb la funció getalbumId.

    }
}



ReactDOM.render(<App />, document.getElementById('root'))