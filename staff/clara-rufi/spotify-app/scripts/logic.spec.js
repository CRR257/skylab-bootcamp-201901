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

   