//x fer test, sortir del react consola i fer npm test

import spotifyApi from './spotify-api.js'
// import users from '../components/Data/data.js'

// const { env: { 'BQAPVCBi7kdTQhhxCR_5FbHJiLRxK1TMb4PBkdogcPLSSANKZ_rKqoB8XOfE1yYiz_-rb7D5g-asHQ7Quk_Ob8YhmD9gTnrG3TllwEFuUYgqNuLsZ17PoDUsok_vJKW2h6e61XDC3pGZ1yipZhgkUrihrRgJtGU3zw' } } = process

spotifyApi.token = 'BQCtCisRk1jw_EnQQ2vVM4Kh_STisJBIKeI_DxwAJr-tpbhR16es8Hhfa0-wGTIZrKiQizPYEjeScMqdR1UuNPlm6d-GAXx54ZR5qyQL8hMRP7C8acW2oDxXPFOVgnrctPMcMexc6vqPr4uqyoNH6PNeCh2pMsUrxQ'
//token => https://developer.spotify.com/console/get-artist/?id=0OdUWJ0sBjDrqHygGUXeCF

describe('spotify-api', () => {
    describe('search artists',() =>{
        it('should succeed on matching query', () => {
            const query = 'madonna'

            return spotifyApi.searchArtists(query)
                .then(artists =>{

                    expect(artists).toBeDefined()
                    expect(artists instanceof Array).toBeTruthy()
                    expect(artists.length).toBeGreaterThan(0)

                    artists.forEach(({ name }) => expect(name.toLowerCase()).toContain(query))
            })
        })

        it('should fail on empty query', () =>{
            const query = ''

            expect(() => spotifyApi.searchArtists(query)).toThrowError('query is empty')
        })
    })

        describe('retrieves albums from artist on artistsPanel', () =>{
            it('should succeed on matching query',() => {
                const artistId = '6tbjWDEIzxoDsBA1FuhfPW'
    
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

            describe('retrieves tracks from albums on albumPanel', () => {
                it('should succeed on matching query', () => {
                const albumId = '4hBA7VgOSxsWOf2N9dJv2X'
    
                return spotifyApi.retrieveTracks(albumId)
                    .then(tracks => {
                        expect(tracks).toBeDefined()
                        expect(tracks instanceof Array).toBeTruthy()
                        expect(tracks.length).toBeGreaterThan(0)
                })
            })
    
            it('should fail on empty albums', function () {
                const albumId = ''
    
                expect(() => spotifyApi.retrieveTracks(albumId)).toThrowError('albumId is empty')
            })
        })

        describe('retrieve a track from tracks on tracksPanel', () =>{
            it('should succeed on matching query', () => {
                const trackId = "5U1tMecqLfOkPDIUK9SVKa"
                const trackName = 'Rebel Heart Tour Intro - Live'

                return spotifyApi.retrieveTrack(trackId) 
                    .then(track => {
                        expect(track).toBeDefined()

                        const {id, name} = track
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

