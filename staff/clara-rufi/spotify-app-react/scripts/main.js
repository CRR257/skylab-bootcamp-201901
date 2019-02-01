spotifyApi.token = 'BQAXo5NwLtQpZLapLCPcYrc9rnt-iWsf_tK-dCEQD112sbdM76bLuPgD4dZAbnkwAcbtmrSXksZqDAayh2GPZfp7pDcWANRMjOi3XCKuITSohtrEbsBQx4laXWIClV2W5iIfCv2hktA7sKdkfaTBJ4vWslRM6hV3GQ'
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
const errorPanel = new ErrorPanel



artistsPanel.hide()
albumPanel.hide()
tracksPanel.hide()
trackPanel.hide()
errorPanel.hide()


const $root = $('#root')

$root.append(searchPanel.$container)
$root.append(artistsPanel.$container)
$root.append(albumPanel.$container)
$root.append (trackPanel.$container)
$root.append (tracksPanel.$container)
$root.append (errorPanel.$container)
// $root.append (playPanel.$container)


searchPanel.onSearch = function(query) {  //provar amb el grup muse

    try {
        logic.searchArtists(query, function(error, artists) {

            if (error) searchPanel.error = error.message
            else {
                searchPanel.errorClear()
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
            artistsPanel.clear()
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
    try {
        logic.retrieveTrack(trackId, function(error, song) {
            if (error) trackPanel.error = error.message
            else {
              
                tracksPanel.hide()
                trackPanel.track =song
                trackPanel.show()
                // playPanel.show()
              
            }
        })
    } catch (err) {
        tracksPanel.error = err.message
    }
}
