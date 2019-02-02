//x fer test, sortir del react consola i fer npm test

import spotifyApi from './spotify-api'
// import users from '../components/Data/data.js'

// const { env: { 'BQAPVCBi7kdTQhhxCR_5FbHJiLRxK1TMb4PBkdogcPLSSANKZ_rKqoB8XOfE1yYiz_-rb7D5g-asHQ7Quk_Ob8YhmD9gTnrG3TllwEFuUYgqNuLsZ17PoDUsok_vJKW2h6e61XDC3pGZ1yipZhgkUrihrRgJtGU3zw' } } = process

// spotifyApi.token = 'BQBn6OJvAK6dRqiqbRiJNv8khmcTTF31xcvf7LUVxZZ4LwshxvWhlgBU2DbDiJxYhjoAz4bndD3TFaQpn9NU_K-pfUjjooabHxvMmku0eoUhAgbyMwCWbpzrceVy7wB19F6e5yPVhHp4munE1fnZ2m8dO5s3w9j4Lg'
//token => https://developer.spotify.com/console/get-artist/?id=0OdUWJ0sBjDrqHygGUXeCF

const { env: { REACT_APP_SPOTIFY_API_TOKEN } } = process

spotifyApi.token = REACT_APP_SPOTIFY_API_TOKEN

describe('spotify api', () => {
    describe('search artists', () => {
        it('should succeed on mathing query', () => {
            const query = 'madonna'

            return spotifyApi.searchArtists(query)
                .then(artists => {
                    expect(artists).toBeDefined()
                    expect(artists instanceof Array).toBeTruthy()
                    expect(artists.length).toBeGreaterThan(0)

                    artists.forEach(({ name }) => expect(name.toLowerCase()).toContain(query))
                })
        })

        it('should fail on empty query', () => {
            const query = ''

            expect(() => spotifyApi.searchArtists(query)).toThrowError('query is empty')
        })
    })

    describe('retrieve albums', () => {
        it('should succeed on mathing query', () => {
            const artistId = '6tbjWDEIzxoDsBA1FuhfPW' // madonna

            return spotifyApi.retrieveAlbums(artistId)
                .then(albums => {
                    expect(albums).toBeDefined()
                    expect(albums instanceof Array).toBeTruthy()
                    expect(albums.length).toBeGreaterThan(0)
                })
        })

        it('should fail on empty artistId', function () {
            const artistId = ''

            expect(() => spotifyApi.retrieveAlbums(artistId)).toThrowError('artistId is empty')
        })
    })

    describe('retrieve tracks', () => {
        it('should succeed on mathing query', () => {
            const albumId = '4hBA7VgOSxsWOf2N9dJv2X' // Rebel Heart Tour (Live)

            return spotifyApi.retrieveTracks(albumId)
                .then(tracks => {
                    expect(tracks).toBeDefined()
                    expect(tracks instanceof Array).toBeTruthy()
                    expect(tracks.length).toBeGreaterThan(0)
                })
        })

        it('should fail on empty albumId', function () {
            const albumId = ''

            expect(() => spotifyApi.retrieveTracks(albumId)).toThrowError('albumId is empty')
        })
    })

    describe('retrieve track', () => {
        it('should succeed on mathing query', () => {
            const trackId = '5U1tMecqLfOkPDIUK9SVKa' // Rebel Heart Tour Intro - Live
            const trackName = 'Rebel Heart Tour Intro - Live'

            return spotifyApi.retrieveTrack(trackId)
                .then(track => {
                    expect(track).toBeDefined()

                    const { id, name } = track

                    expect(id).toBe(trackId)
                    expect(name).toBe(trackName)
                })
        })

        it('should fail on empty trackId', function () {
            const trackId = ''

            expect(() => spotifyApi.retrieveTrack(trackId)).toThrowError('trackId is empty')
        })
    })
})
// describe('spotify-api', () => {
//     describe('search artists',() =>{
//         it('should succeed on matching query', () => {
//             const query = 'madonna'

//             return spotifyApi.searchArtists(query)
//                 .then(artists =>{

//                     expect(artists).toBeDefined()
//                     expect(artists instanceof Array).toBeTruthy()
//                     expect(artists.length).toBeGreaterThan(0)

//                     artists.forEach(({ name }) => expect(name.toLowerCase()).toContain(query))
//             })
//         })

//         it('should fail on empty query', () =>{
//             const query = ''

//             expect(() => spotifyApi.searchArtists(query)).toThrowError('query is empty')
//         })
//     })

//         describe('retrieves albums from artist on artistsPanel', () =>{
//             it('should succeed on matching query',() => {
//                 const artistId = '6tbjWDEIzxoDsBA1FuhfPW'
    
//                 return spotifyApi.retrieveAlbums(artistId) 
//                     .then(albums => {
    
//                     expect(albums).toBeDefined()
//                     expect(albums instanceof Array).toBeTruthy()
//                     expect(albums.length).toBeGreaterThan(0)
//                 })
//             })
    
//             it('should fail on empty artistId', function () {
//                 const artistId = ''
    
//              expect(() => spotifyApi.retrieveAlbums(artistId)).toThrowError('artistId is empty')
//             })
//         })

//             describe('retrieves tracks from albums on albumPanel', () => {
//                 it('should succeed on matching query', () => {
//                 const albumId = '4hBA7VgOSxsWOf2N9dJv2X'
    
//                 return spotifyApi.retrieveTracks(albumId)
//                     .then(tracks => {
//                         expect(tracks).toBeDefined()
//                         expect(tracks instanceof Array).toBeTruthy()
//                         expect(tracks.length).toBeGreaterThan(0)
//                 })
//             })
    
//             it('should fail on empty albums', function () {
//                 const albumId = ''
    
//                 expect(() => spotifyApi.retrieveTracks(albumId)).toThrowError('albumId is empty')
//             })
//         })

//         describe('retrieve a track from tracks on tracksPanel', () =>{
//             it('should succeed on matching query', () => {
//                 const trackId = "5U1tMecqLfOkPDIUK9SVKa"
//                 const trackName = 'Rebel Heart Tour Intro - Live'

//                 return spotifyApi.retrieveTrack(trackId) 
//                     .then(track => {
//                         expect(track).toBeDefined()

//                         const {id, name} = track
//                         expect(id).toBe(trackId)
//                         expect(name).toBe(trackName)     
//                 })
//             })

//             it('should fail on empty trackId', function () {
//                 const trackId = ''
    
//                 expect(() => spotifyApi.retrieveTrack(trackId)).toThrowError('trackId is empty')
//             })
//         })
// })

