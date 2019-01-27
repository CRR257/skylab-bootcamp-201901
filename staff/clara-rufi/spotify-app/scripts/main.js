spotifyApi.token = 'BQDkpMvc_LB0E0px3co2YYelw_4WWV5Cti7IAVh_pju9deaAvAWlDCC3GPjdR6Xi53YrpEv-iKAc9ozFJJOaZitKoXtJ69e30lJI-C5M9qkgfwcHNmvUuV289bRyvJaBuNWOnBB-1TcSBd5t7t5HfzXTfbHUhC8zdw'
// anar renovant el token cada vegada https://developer.spotify.com/console/get-artist/?id=0OdUWJ0sBjDrqHygGUXeCF fer get token
// ara es mostra llista de cantants. fer q es mostri discs del cantant q seleccionem, les cançons q te a dins i dp un reproductor
// reproductor el posarem dins d'un html. fer q els panells s'engegin i s'apaguin
// tb testejar jasmine
// https://developer.spotify.com/documentation/web-api/reference/albums/get-album/


const searchPanel = new SearchPanel
const artistsPanel = new ArtistsPanel
const albumPanel = new AlbumPanel
const tracksPanel = new TracksPanel
const trackPanel = new TrackPanel
// const errorPanel = new ErrorPanel


artistsPanel.hide()
albumPanel.hide()
tracksPanel.hide()
trackPanel.hide()
// errorPanel.hide()

const $root = $('#root')

$root.append(searchPanel.$container)
$root.append(artistsPanel.$container)
$root.append(albumPanel.$container)
$root.append (trackPanel.$container)
$root.append (tracksPanel.$container)


searchPanel.onSearch = function(query) {

    try {
        logic.searchArtists(query, function(error, artists) { 
            if (error) searchPanel.error = error.message
            else {
                artistsPanel.artists = artists

                artistsPanel.show()
            }
        })
    } catch(err) {
        searchPanel.error = err.message
    }
}

artistsPanel.onArtistSelected = function (artistId) {

    try {
      
        logic.retrieveAlbums(artistId, function (error, albums) {

            if (error) artistsPanel.error = error.message
            else {
            artistsPanel.hide()

            albumPanel.albums = albums
            albumPanel.show()
            }
        })              
    } catch (err) {
        artistsPanel.error = err.message       
    }
}

albumPanel.onAlbumSelected = function (albumId){ 
   
    try {
    
        logic.retrieveTracks(albumId, function(error, tracks) {
        
            if (error) albumPanel.error = error.message
            else {
                albumPanel.hide()
                tracksPanel.tracks = tracks
                tracksPanel.show()
            }
        })
    } catch (err) {
        albumPanel.error = err.message
    }
}

tracksPanel.onTrackSelected = function (trackId){ 
    console.log("ontrackselected main" + trackId)
    try {
        logic.retrieveTrack(trackId, function(error, track) {
            console.log("retrieve" + trackId)
            if (error) trackPanel.error = error.message
            else {
                debugger
                tracksPanel.hide()
                console.log("aaa")
                trackPanel.track = track
                console.log('vvvv' + trackPanel.track)
                trackPanel.show()
                console.log("ccc")
            }
        })
    } catch (err) {
        tracksPanel.error = err.message
    }
}
