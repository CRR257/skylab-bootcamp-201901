spotifyApi.token = 'BQAdGQDA4FKgco5QyoCfi0ccNEcf4o6b3yNrpucFKMEXYi5ARJQdpjxrhnaBWU54xsz1gPTZcR9KcL9o9JK2rr1dYMtPUlXBBdzsek9WgnZDORIW4yfWRE4hLMdrxStcl1_KwUkmyl2_7RqMlEow7xrYchj2Hox3IQ'
//token => https://developer.spotify.com/console/get-artist/?id=0OdUWJ0sBjDrqHygGUXeCF


class LoginPanel extends React.Component{
    state = {email: '', password: '', }

    handleEmailInput = event => this.setState({email:event.target.value})

    handlePasswordInput = event => this.setState({password: event.target.value})

    onLogin = event => {
        event.preventDefault()

        const {state: {email, password}, props: {onLogin} } = this
        onLogin(email, password)
    }


    render(){
       
        const { onLogin, handleEmailInput, handlePasswordInput } = this 

        return <section className="cart_login">
            <h3>Login:</h3>
            <form>
                <input className="email" placeholder="@mail" onChange= {handleEmailInput}></input> 
                <input className="password" placeholder="password" onChange= {handlePasswordInput}></input>
                <button onClick={onLogin} type="submit" className="buttonLogin">Login</button>
                <button onClick={this.onRegister} className= "buttonRegister">Register</button>
            </form>
        </section>
    }
}

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
                    this.props.setAlbums1(albums)
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
            <div className="card-columns">      
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
            <div className="card-columns">  
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
            </div>
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
            <div className="results_tracks"></div>
            {
                tracks.map(track => (
                    <div className="card_tracks" key={track.id} onClick={() => this.getTrackId(track.id)}>
                        <div className="card_tracks_list">{track.name}</div>
                    </div>
                ))
            }
        </section>
    }
}

class TrackPanel extends React.Component {
    state = {heart: null}

    onGoBack= () => {
        this.props.onGoBack()
    }

    like = event => {
        event.preventDefault()
        like(heart)
    }

    render() {
        const { track } = this.props
        

        return <section className="resultstracks_container">
            <div className="title_go_back">
            <h3><u>Track</u></h3>  
            <button className="goBack" onClick={this.onGoBack}>Go Back to Tracks</button>
            </div>
           
      
            <div className="card_title-track">{track.name}< i class="far fa-heart heart" onClick={like}></i></div>
            <audio controls autoPlay loop src={track.preview_url} class="player">
            </audio>

        </section>
    }
}


class App extends React.Component { //app pot compartir info amb tots els fills, canvis d'estat
    state = { artists: null, albums: null, tracks: null, track: null, loginVisual: true, searchVisual: false, artistsVisual: false, albumsVisual: false, tracksVisual: false, trackVisual: false }

    // artistsVisual => pq no es mostri el panell d'artistes. al ppi el definim com a false, q no es mostri


    handleLogin = (email,password) => {
        try {
            logic.login(email, password, user => {
                console.log(user)
            })
            this.setState({loginVisual:false, searchVisual:true} )
            {welcome}
        } catch (error) {
            console.log(error.message)
        }
    }

    heartLike = (heart) => {
        try{
            console.log("aaaa")
        }catch (error) {
            console.log(error.message)
        }
    }
 
    onGoBack = () =>{
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
            <h2>🎶 App Spotify 🎶</h2>    
            </header>

            {this.state.loginVisual && <LoginPanel onLogin={this.handleLogin}/>}
            {this.state.searchVisual &&<SearchPanel setArtists={this.setArtists} />}
            {this.state.artistsVisual && <ArtistsPanel artists={this.state.artists} artistsVisual={this.state.artistsVisual} setAlbums1={this.setAlbums} />}
            {this.state.albumsVisual && <AlbumPanel setTracks={this.setTracks} albums={this.state.albums} albumVisual={this.state.artistsVisual} />}
            {this.state.tracksVisual && <TracksPanel tracks={this.state.tracks} tracksVisual={this.state.tracksVisual} setTrack={this.setTrack} />}
            {this.state.trackVisual && <TrackPanel track={this.state.track} trackVisual={this.state.trackVisual} onGoBack={this.onGoBack} like={this.heartLike}/>}

          
           
            
        </main>

        //{this.state.artists &&  <ArtistsPanel artists={this.state.artists}/>} li diem  q com q artists= null, artists és fals, q no es mostri     
        //<ArtistsPanel artists={this.state.artist}/>   li passem el prop d'artists, q passen a ser props d'artistpanel
        //setartist canvia el estado de artist
        //<AlbumPanel setTracks={this.setTracks} => serveix per conectar el panell App amb la funció getalbumId.
    }
}


ReactDOM.render(<App />, document.getElementById('root'))