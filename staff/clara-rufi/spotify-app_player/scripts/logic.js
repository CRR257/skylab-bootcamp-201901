const logic = {
    /**
     * Search artists on searchPanel
     * 
     * @param {string} query 
     * @param {function} callback 
     */
    searchArtists(query, callback) {  
        if (typeof query !== 'string') throw TypeError(`${query} is not a string`)

        if(!query.trim().length) throw Error('query is empty')

        if (typeof callback !== 'function') throw TypeError(`${callback} is not a function`)

        spotifyApi.searchArtists(query, callback)
    },

    /**
     * Retrieves albums from artist on artistsPanel
     * 
     * @param {string} artistId 
     * @param {function} callback 
     */
    retrieveAlbums(artistId, callback) {
        if (typeof artistId !== 'string') throw TypeError(`${artistId} is not a string`)

        if(!artistId.trim().length) throw Error('artistId is empty')

        if (typeof callback !== 'function') throw TypeError(`${callback} is not a function`)

        spotifyApi.retrieveAlbums(artistId, callback)
    },

     /**
     * Retrieves songs from albums on albumPanel
     * 
     * @param {string} albumtId 
     * @param {function} callback 
     */
    retrieveTracks(albumId, callback){
        
        if (typeof albumId !== 'string') throw TypeError(`${albumId} is not a string`)
        
        if (!albumId.trim().length) throw Error ('albumId is empty')
        
        if (typeof callback !== 'function') throw TypeError (`${callback} is not a function`)

        spotifyApi.retrieveTracks(albumId, callback)
    },

    /**
     * Retrieve a song from album on tracksPanel
     * 
     * @param {string} albumtId 
     * @param {function} callback 
     */

    retrieveTrack(trackId, callback) {
        console.log("retrieveTrack", trackId)
                if  (typeof trackId !== 'string') throw TypeError (`${trackId} is not a string`)
                if (!trackId.trim().length) throw Error('track is empty')
                if (typeof callback !== 'function') throw TypeError (`${callback} is not a function`)

                spotifyApi.retrieveTrack(trackId, callback)
            },

    

    // TODO retrieveTracks(albumId, callback) // endpoint /v1/albums/${albumId}/tracks

    // TODO retrieveTrack(id, callback) // endpoint 	/v1/tracks/{id}
}

