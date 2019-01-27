spotifyApi.token = 'BQBDnpocobtgq7vMNDadXK8lVdaA51n1O6VtFkU8cuCoyzOmAPWV_ZD2HMo4qlWS6Tyz14MNQVMoYi6x5jvt2IXZ_U2p4dL8RcwGN5Fb6ajPvhbOXXk9IOTFbVuPTGo6olqosmT5'

describe('logic', function () {
    describe('search artists', function () {
        it('should succeed on mathing query', function (done) {
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

    describe('retrieveAlbums', function () {
        it('should succeed on mathing query', function (done) {
            const query = 'madonna'

            logic.retrieveAlbums(artists, function (error, albums) {
                expect(error).toBeUndefined()

                expect(albums).toBeDefined()
                expect(albums instanceof Array).toBeTruthy()
                expect(albums.length).toBeGreaterThan(0)

                albums.forEach(({ name }) => expect(name.toLowerCase()).toContain(albums))

                done()
            })
        })

        it('should fail on empty query', function () {
            const albums = ''

            expect(() => logic.searchArtists(artists, function (error, albums) { })).toThrowError('there are no albums for this artist')
        })
    })
})