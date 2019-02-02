/**
 * Spotify API client.
 * 
 * @version 2.0.0
 */
const spotifyApi = {
    token: 'BQD61DG1eO0zY-nziTcQXdXwjhmiK4YCsxqMpwE6QucBxIhYYOfRdVPk9ueqcRoQgqSBtyjhDTJ-AA3iqiOr23e2h7qR2TUrtVtbvUSgKgWtaB4D2opk4DJ0-aqQ7DsqaXfmj8RdJwCzlBR9nn2a8XreeQQCldRrKw',
    url: 'https://api.spotify.com/v1',

    /**
     * Searches artists.
     * 
     * @param {string} query - The text to match on artists search.
     * @retuns {Promise} - Resolves with artists, otherwise rejects with error.
     * 
     * @throws {TypeError} - On wrong parameters type.
     * @throws {Error} - On empty parameters value.
     */
    searchArtists(query) {
        debugger
        if (typeof query !== 'string') throw TypeError(`${query} is not a string`)

        if (!query.trim().length) throw Error('query is empty')

        return fetch(`${this.url}/search?q=${query}&type=artist`, {
            headers: {
                authorization: `Bearer ${this.token}`
            }
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) throw Error(response.error.message)

                const { artists: { items } } = response

                return items
            })
    },

    /**
     * Retrieves albums from artist.
     * 
     * @param {string} artistId - The artist to retrieve albums from.
     * @returns {Promise} - Resolves with albums, otherwise rejects with error.
     * 
     * @throws {TypeError} - On wrong parameters type.
     * @throws {Error} - On empty parameters value.
     */
    retrieveAlbums(artistId) {
        if (typeof artistId !== 'string') throw TypeError(`${artistId} is not a string`)

        if (!artistId.trim().length) throw Error('artistId is empty')

        return fetch(`${this.url}/artists/${artistId}/albums`, {
            headers: {
                authorization: `Bearer ${this.token}`
            }
        })
            .then(response => response.json())
            .then(({ items }) => items)
    },

    /**
     * Retrieves tracks from album.
     * 
     * @param {string} albumId - The album to retrieve tracks from.
     * @preturns {Promise} - Resolves with tracks, otherwise rejects with error.
     * 
     * @throws {TypeError} - On wrong parameters type.
     * @throws {Error} - On empty parameters value.
     */
    retrieveTracks(albumId) {
        if (typeof albumId !== 'string') throw TypeError(`${albumId} is not a string`)

        if (!albumId.trim().length) throw Error('albumId is empty')

        return fetch(`${this.url}/albums/${albumId}/tracks`, {
            headers: {
                authorization: `Bearer ${this.token}`
            }
        })
            .then(response => response.json())
            .then(({ items }) => items)
    },

    /**
     * Retrieves track.
     * 
     * @param {string} trackId - The id of the track to be retrieved.
     * @returns {Promise} Resolves with track, otherwise rejects with error.
     * 
     * @throws {TypeError} - On wrong parameters type.
     * @throws {Error} - On empty parameters value.
     */
    retrieveTrack(trackId) {
        if (typeof trackId !== 'string') throw TypeError(`${trackId} is not a string`)

        if (!trackId.trim().length) throw Error('trackId is empty')

        return fetch(`${this.url}/tracks/${trackId}`, {
            headers: {
                authorization: `Bearer ${this.token}`
            }
        })
            .then(response => response.json())
    }
}

export default spotifyApi

/**
 * Spotify API client.
 * 
 * 
 * 
 * 
* version 1.0.0
//  
//     const spotifyApi = {
//     token: 'NO-TOKEN',
//     url: 'https://api.spotify.com/v1',

//     /**
//      * Searches ducklings.
//      * 
//      * param {string} query - The text to match on artists search.
//      * @aram {function} callback - The expression to evaluate on response. If error first 
//      * argument informs the error message, othwerwise first argument is undefined and second argument provides the matching 
//      * results.
//      */
//     //metode search artist
//     searchArtists(query) {
        
//         if (typeof query !== 'string') throw TypeError(`${query} is not a string`)

//         if (!query.trim().length) throw Error('query is empty')

//         return fetch(`${this.url}/search?q=${query}&type=artist`, {//el fetch retorna una promise. si fem fetch('https://api.spotify.com/v1/search?q=${query}&type=artist')
//         headers: {
//             authorization: `Bearer ${this.token}`
//         }
//     })
//         .then(response => response.json())
//         .then(response => {
//             if (response.error) throw Error(response.error.message)

//             const { artists: { items } } = response

//             return items
//         })
// },

//     /**
//      * Retrieves albums from artist.
//      * 
//      * @param {string} artistId - The artist to retrieve albums from.
//      * @returns {Promise} - Resolves with albums, otherwise rejects with error.
//      */
//     retrieveAlbums(artistId) {
//         if (typeof artistId !== 'string') throw TypeError(`${artistId} is not a string`)

//         if (!artistId.trim().length) throw Error('artistId is empty')

//         return fetch(`${this.url}/artists/${artistId}/albums`, {
//             headers: {
//                 authorization: `Bearer ${this.token}`
//             }
//         })
//             .then(response => response.json())
//             .then(({ items }) => items)
//     },


//     /**
//      * Retrieves albums from artist.
//      * 
//      * @param {string} artistId - The artist to retrieve albums from.
//      * @returns {Promise} - Resolves with albums, otherwise rejects with error.
//      */
//     retrieveTracks(albumId) {

//         if (typeof albumId !== 'string') throw TypeError(`${albumId} is not a string`)

//         if (!albumId.trim().length) throw Error('albumId is empty')

//         return fetch(`${this.url}/albums/${albumId}/tracks`, {
         
//             headers: {
//                 authorization: `Bearer ${this.token}`
//             }
//         })
//         .then(response => response.json())
//         .then(({ items }) => items)
// },

//     /**
//      * Retrieves song from album.
//      * 
//      * @param {string} trackId - The id of the track to be retrieved.
//      * @returns {Promise} Resolves with track, otherwise rejects with error.
//      */
//     retrieveTrack(trackId) {
//         if (typeof trackId !== 'string') throw TypeError(`${trackId} is not a string`)

//         if (!trackId.trim().length) throw Error('trackId is empty')

//         return fetch(`${this.url}/tracks/${trackId}`, {
//             headers: {
//                 authorization: `Bearer ${this.token}`
//             }
//         })
//             .then(response => response.json())
//     }
// }

// export default spotifyApi