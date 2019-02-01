//x testejar, sortir de la del run de react i fer npm test

spotifyApi.token = 'BQAkACmg2S2yEnYe6mfBrV71RxSm3Si5bjxn09OaaXv9hBgUGaSilyhaf0apREtl4d7zpYyc3nyqzaD9GrOSQ4MhZS1icl3yfSbJpO3uCAsdr3TpCSLaVkBCgKmvsVTW4EPX6x5PHJrfuwc_z50MZC77ijm5PR9ZOw'

describe('logic', function () {
    describe('search artists', function () {
        it('should succeed on mathing query', function (done) {
            const query = 'madonna'

            logic.searchArtists(query, function (error, artists) {
                expect(error).toBeUndefined()

                expect(artists).toBeDefined()
                expect(artists instanceof Array).toBeTruthy()
                expect(artists.length).toBeGreaterThan(0)
                expect(artist).toBeNonEmptyArray();

                artists.forEach(({ name }) => expect(name.toLowerCase()).toContain(query))

                done()
            })
        })

        it('should fail on empty query', function () {
            const query = ''

            expect(() => logic.searchArtists(query, function (error, artists) { })).toThrowError('Query is empty')
        })
    })

})