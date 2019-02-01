//x fer test, sortir del react consola i fer npm test


import spotifyApi from './spotify-api.js'
// import users from '../components/Data/data.js'
import logic from '../Logic/logic.js'

spotifyApi.token = 'BQAdGQDA4FKgco5QyoCfi0ccNEcf4o6b3yNrpucFKMEXYi5ARJQdpjxrhnaBWU54xsz1gPTZcR9KcL9o9JK2rr1dYMtPUlXBBdzsek9WgnZDORIW4yfWRE4hLMdrxStcl1_KwUkmyl2_7RqMlEow7xrYchj2Hox3IQ'

describe('logic', function () {
    describe('search artists', function () {
        it('should succeed on matching query', function (done) {
            const query = 'madonna'

            logic.searchArtists(query, function (error, artists) {
                expect(error).toBeUndefined()

                expect(artists).toBeDefined()
                expect(artists instanceof Array).toBeTruthy()
                expect(artists.length).toBeGreaterThan(0)

                artists.forEach(({ name }) => expect(name.toLowerCase()).toContain(query))

                done()
            })
        })

        it('should fail on empty query', function () {
            const query = ''

            expect(() => logic.searchArtists(query, function (error, artists) { })).toThrowError('query is empty')
        })
    })

    
        describe('retrieves albums from artist on artistsPanel', function () {
            it('should succeed on matching query', function (done) {
                const artistId = '6tbjWDEIzxoDsBA1FuhfPW'
    
                logic.retrieveAlbums(artistId, function (error, albums) {
                    expect(error).toBeUndefined()
    
                    expect(albums).toBeDefined()
                    expect(albums instanceof Array).toBeTruthy()
                    expect(albums.length).toBeGreaterThan(0)
    
                    albums.forEach(({ name }) => expect(name.toLowerCase()).toBeDefined())
                    //artists.forEach(({ name }) => expect(name.toLowerCase()).toContain(albums)) => no ho podem posar pq la id de l'artista no serà mai igual al nom
                    done()
                })
            })
    
            it('should fail on empty albums', function () {
                const artistId = ''
    
                expect(() => logic.retrieveAlbums(artistId, function (error, artistId) { })).toThrowError('artistId is empty')
            })
        })

            describe('retrieves songs from albums on albumPanel', function () {
            it('should succeed on matching query', function (done) {
                const albumId = '4hBA7VgOSxsWOf2N9dJv2X'
    
                logic.retrieveTracks(albumId, function (error, tracks) {
                    expect(error).toBeUndefined()
    
                    expect(tracks).toBeDefined()
                    expect(tracks instanceof Array).toBeTruthy()
                    expect(tracks.length).toBeGreaterThan(0)
    
                    tracks.forEach(({ name }) => expect(albumId.toLowerCase()).toBeDefined())
    
                    done()
                })
            })
    
            it('should fail on empty albums', function () {
                const albumId = ''
    
                expect(() => logic.retrieveTracks(albumId, function (error, albumId) { })).toThrowError('albumId is empty')
            })
        })

        describe('retrieve a song from album on tracksPanel', function () {
            it('should succeed on matching query', function (done) {
                const trackId = "11WgsxZ2Xe9jomfNI6BRcF"
    
                logic.retrieveTrack(trackId, function (error, track) {
                    expect(error).toBeUndefined()
    
                    expect(track).toBeDefined()
                    expect(track instanceof Array).toBeTruthy()
                    // expect(track.length).toBeGreaterThan(0)
    
                    // track.forEach(({ name }) => expect(trackId.toLowerCase()).toBeDefined())
    
                    done()
                })
            })
    
            it('should fail on empty albums', function () {
                const trackId = ''
    
                expect(() => logic.retrieveTrack(trackId, function (error, trackId) { })).toThrowError('trackId is not defined')
            })
        })
    })


