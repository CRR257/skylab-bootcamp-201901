'use strict'

const expect = require('expect')
const path = require('path')
const fsp = require('fs').promises
const artistComment = require('.')
const uuid = require('uuid')

describe('artist comments data', () => {

    const file = path.join(__dirname, artistComment.file)

    beforeEach(() => fsp.writeFile(file, JSON.stringify([])))

    describe('__load__', () => {
        const comments = [
            {
                id: uuid(),
                userId: `userId-${Math.random()}`,
                artistId: `artistId-${Math.random()}`,
                text: `comment ${Math.random()}`,
                date: new Date
            },
            {
                id: uuid(),
                userId: `userId-${Math.random()}`,
                artistId: `artistId-${Math.random()}`,
                text: `comment ${Math.random()}`,
                date: new Date
            },
            {
                id: uuid(),
                userId: `userId-${Math.random()}`,
                artistId: `artistId-${Math.random()}`,
                text: `comment ${Math.random()}`,
                date: new Date
            }
        ]

        beforeEach(() => fsp.writeFile(file, JSON.stringify(comments)))

        it('should succeed on correct file path', () =>
        artistComment.__load__(file)
            .then(_comments => {
                expect(_comments).toBeDefined()
                expect(_comments.length).toBe(comments.length)

                _comments.forEach(({ id, userId, artistId, text, date }, index) => {
                    expect(id).toBe(comments[index].id)
                    expect(userId).toBe(comments[index].userId)
                    expect(artistId).toBe(comments[index].artistId)
                    expect(text).toBe(comments[index].text)
                    expect(date).toBe(comments[index].date.toISOString())
                })
            })
        )

        it('should throw an error when receiving array instead of string', () => {
            let fileArray = []
            try {
                artistComment.__load__(fileArray)
                    .then(() => { })
            } catch (error) {
                expect(error).toBeDefined()
                expect(error instanceof TypeError).toBeTruthy()
                expect(error.message).toBe(`${fileArray} is not a string`)
            }
        })

        it('should throw an error when receiving an empty string', () => {
            let fileString = ''
            try {
                artistComment.__load__(fileString)
                    .then(() => { })
            } catch (error) {
                expect(error).toBeDefined()
                expect(error instanceof Error).toBeTruthy()
                expect(error.message).toBe(`${fileString} is empty`)
            }
        })
    })

    describe('__save__', () => {
        const comments = [
            {
                id: uuid(),
                userId: `userId-${Math.random()}`,
                artistId: `artistId-${Math.random()}`,
                text: `comment ${Math.random()}`,
                date: new Date
            },
            {
                id: uuid(),
                userId: `userId-${Math.random()}`,
                artistId: `artistId-${Math.random()}`,
                text: `comment ${Math.random()}`,
                date: new Date
            },
            {
                id: uuid(),
                userId: `userId-${Math.random()}`,
                artistId: `artistId-${Math.random()}`,
                text: `comment ${Math.random()}`,
                date: new Date
            }
        ]

        it('should succeed on correct file path', () =>
            artistComment.__save__(file, comments)
                .then(() => fsp.readFile(file))
                .then(content => JSON.parse(content))
                .then(_comments => {
                    expect(_comments).toBeDefined()
                    expect(_comments.length).toBe(comments.length)

                    _comments.forEach(({ id, userId, artistId, text, date }, index) => {
                        expect(id).toBe(comments[index].id)
                        expect(userId).toBe(comments[index].userId)
                        expect(artistId).toBe(comments[index].artistId)
                        expect(text).toBe(comments[index].text)
                        expect(date).toBe(comments[index].date.toISOString())
                    })
            })
        )    
        it('should throw an error when receiving object instead of array', () => {
            let commentsObject = {}
            try {
                artistComment.__save__(file, commentsObject)
                    .then(() => { })
            } catch (error) {
                expect(error).toBeDefined()
                expect(error instanceof Error).toBeTruthy()
                expect(error.message).toBe(`${commentsObject} is not an array`)
            }
        })
    })
    describe('add', () => {
        const comment = {
            artistId: `artistId-${Math.random()}`,
            userId: `userId-${Math.random()}`,
            text: `comment ${Math.random()}`,
            date: new Date
        }

        it('should succeed on correct data', () =>
            artistComment.add(comment)
                .then(() => {
                    expect(comment.id).toBeDefined()

                    return fsp.readFile(file)
    })
        .then(content => JSON.parse(content))
        .then(comments => {
            expect(comments).toBeDefined()
            expect(comments.length).toBe(1)

            const[{id, userId, artistId, text, date}] = comments

            expect(id).toBe(comment.id)
            expect(userId).toBe(comment.userId)
            expect(artistId).toBe(comment.artistId)
            expect(text).toBe(comment.text)
            expect(date).toBe(comment.date.toISOString())
        })
    )
    it('should thrown an error using string instead of object', () => {
        let commentString = ''
        try {
            return artistComment.add(commentString)
                .then(() => { })
        } catch (error) {
            expect(error).toBeDefined()
            expect(error instanceof TypeError).toBeTruthy()
            expect(error.message).toBe(`${commentString} is not an object`)
        }
    })
})

})

    describe('retrieve', () => {
        const comment = {
            id: uuid(),
            artistId: `artistId-${Math.random()}`,
            userId: `userId-${Math.random()}`,
            text: `comment ${Math.random()}`,
            date: new Date
        }

        beforeEach(() =>
            //artistComment.add(comment) // no es pot utilitzar un mètode q tb tira de logic
            fsp.writeFile(file, JSOC.stringify([comment]))
        )

        it('should succeed on correct commend id', () => {

            artistComment.retrieve(comment.id)
                .then(({ id, artistId, userId, text, date }) => {
                    expect(id).toBe(comment.id)
                    expect(artistId).toBe(comment.artistId)
                    expect(userId).toBe(comment.userId)
                    expect(text).toBe(comment.text)
                    expect(date.toString()).toBe(comment.date.toString())
                })
            }
        )
        it('should succeed on correct commend id', () =>
        artistComment.retrieve(comment.id)
            .then(({ id, artistId, userId, text, date }) => {
                expect(id).toBe(comment.id)
                expect(artistId).toBe(comment.artistId)
                expect(userId).toBe(comment.userId)
                expect(text).toBe(comment.text)
                expect(date.toString()).toBe(comment.date.toString())
            })
    )

        it('should thrown an error using an empty string', () => {
            let commentIdEmptyString = ''
            try {
                artistComment.retrieve(commentIdEmptyString)
                    .then(() => { })
            } catch (error) {
                expect(error).toBeDefined()
                expect(error instanceof Error).toBeTruthy()
                expect(error.message).toBe(`${commentIdEmptyString} is empty`)
            }
        })
        })

    describe ('update', () => {
        const comment = {
            id: uuid(),
            artistId: `artistId-${Math.random()}`,
            userId: `userId-${Math.random()}`,
            text: `comment ${Math.random()}`,
            date: new Date
        }

        beforeEach(() =>
            //artistComment.add(comment) //add no es pot fer servir 
            fsp.writeFile(file, JSON.stringify([comment]))
        )

        it('should succeed on correct data', () => {
            comment.text += '-NEW'

            return artistComment.update(comment)
                .then(() => fsp.writeFile(file))
                .then(content => JSON.parse(content))
                .then(comments => comments.find(_comment => _comment.id === comment.id))
                .then(({id, artistId, userId, text, date}) => {
                    expect(id).toBe(comment.id)
                    expect(artistId).toBe(comment.artistId)
                    expect(userId).toBe(comment.userId)
                    expect(text).toBe(comment.text)
                    expect(date).toBe(comment.date.toISOString())
                })
        })
        it('should thrown an error using an empty string', () => {
            let commentEmptyString = ''
            try {
                artistComment.update(commentEmptyString)
                    .then(() => { })
            } catch (error) {
                expect(error).toBeDefined()
                expect(error instanceof TypeError).toBeTruthy()
                expect(error.message).toBe(`${commentEmptyString} is not an object`)
            }
        })
    })
  

    describe('remove', () => {
        const comment = {
            artistId: `artistId-${Math.random()}`,
            userId: `userId-${Math.random()}`,
            text: `comment ${Math.random()}`,
            date: new Date
        }

        beforeEach(() =>
            // artistComment.add(comment) // FATAL each test should test ONE unit
            fsp.writeFile(file, JSON.stringify([comment]))
        )

        it('should succeed on correct comment id', () =>
            artistComment.remove(comment.id)
                .then(() => fsp.readFile(file))
                .then(content => JSON.parse(content))
                .then(comments => comments.find(_comment => _comment.id === comment.id))
                .then(comment => expect(comment).toBeUndefined())
        )

        it('should thrown an error using an empty string', () => {
            let IdEmptyString = ''
            try {
                artistComment.remove(IdEmptyString)
                    .then(() => { })
            } catch (error) {
                expect(error).toBeDefined()
                expect(error instanceof Error).toBeTruthy()
                expect(error.message).toBe(`${IdEmptyString} is empty`)
            }
        })

        // Doubt: este test no me está petando en ningún caso
        it('should thrown an error using an array instead of string', () => {
            let idArray = []
            try {
                artistComment.remove(idArray)
                    .then(() => { })
            } catch (error) {
                expect(error).toBeDefined()
                expect(error instanceof TypeError).toBeTruthy()
                expect(error.message).toBe(`${idArray} is not a string`)
            }
        })
    })
   

    describe('find', () => {
        const comment = {
            id: uuid(),
            artistId: `artistId-${Math.random()}`,
            userId: `userId-${Math.random()}`,
            text: `comment ${Math.random()}`,
            date: new Date
        }

        const comment2 = {
            id: uuid(),
            artistId: `artistId-${Math.random()}`,
            userId: `userId-${Math.random()}`,
            text: `comment ${Math.random()}`,
            date: new Date
        }

        const comment3 = {
            id: uuid(),
            artistId: `artistId-${Math.random()}`,
            userId: `userId-${Math.random()}`,
            text: `comment ${Math.random()}`,
            date: new Date
        }

        const comment4 = {
            id: uuid(),
            artistId: comment2.artistId,
            userId: `userId-${Math.random()}`,
            text: `comment ${Math.random()}`,
            date: new Date
        }

        const comment5 = {
            id: uuid(),
            artistId: comment2.artistId,
            userId: `userId-5-${Math.random()}`,
            text: comment4.text,
            date: new Date
        }

        beforeEach(() =>
            // artistComment.add(comment) // FATAL each test should test ONE unit
            //     .then(() => artistComment.add(comment2))
            //     .then(() => artistComment.add(comment3))
            //     .then(() => artistComment.add(comment4))
            //     .then(() => artistComment.add(comment5))
            fsp.writeFile(file, JSON.stringify([comment, comment2, comment3, comment4, comment5]))
        )

        it('should succeed on correct criteria by id', () =>
        artistComment.find({ id: comment2.id })
            .then(comments => {
                expect(comments).toBeDefined()
                expect(comments.length).toBe(1)

                const [{ id, artistId, userId, text, date }] = comments

                expect(id).toBe(comment2.id)
                expect(artistId).toBe(comment2.artistId)
                expect(userId).toBe(comment2.userId)
                expect(text).toBe(comment2.text)
                expect(date).toEqual(comment2.date)
            })
    )

    it('should succeed on correct criteria by artist id', () =>
        artistComment.find({ artistId: comment2.artistId })
            .then(comments => {
                expect(comments).toBeDefined()
                expect(comments.length).toBe(3)

                const [_comment, _comment2, _comment3] = comments

                expect(_comment.id).toBe(comment2.id)
                expect(_comment.artistId).toBe(comment2.artistId)
                expect(_comment.userId).toBe(comment2.userId)
                expect(_comment.text).toBe(comment2.text)
                expect(_comment.date).toEqual(comment2.date)

                expect(_comment2.id).toBe(comment4.id)
                expect(_comment2.artistId).toBe(comment4.artistId)
                expect(_comment2.userId).toBe(comment4.userId)
                expect(_comment2.text).toBe(comment4.text)
                expect(_comment2.date).toEqual(comment4.date)

                expect(_comment3.id).toBe(comment5.id)
                expect(_comment3.artistId).toBe(comment5.artistId)
                expect(_comment3.userId).toBe(comment5.userId)
                expect(_comment3.text).toBe(comment5.text)
                expect(_comment3.date).toEqual(comment5.date)
            })
    )

    it('should succeed on correct criteria by artist id and comment', () =>
        artistComment.find({ artistId: comment2.artistId, text: comment4.text })
            .then(comments => {
                expect(comments).toBeDefined()
                expect(comments.length).toBe(2)

                const [_comment, _comment2] = comments

                expect(_comment.id).toBe(comment4.id)
                expect(_comment.artistId).toBe(comment4.artistId)
                expect(_comment.userId).toBe(comment4.userId)
                expect(_comment.text).toBe(comment4.text)
                expect(_comment.date).toEqual(comment4.date)

                expect(_comment2.id).toBe(comment5.id)
                expect(_comment2.artistId).toBe(comment5.artistId)
                expect(_comment2.userId).toBe(comment5.userId)
                expect(_comment2.text).toBe(comment5.text)
                expect(_comment2.date).toEqual(comment5.date)
            })
    )

    it('should throw an error using an empty object', () => {
        let emptyObject = {}
        try {
            artistComment.find(emptyObject)
                .then(comments => {})
        } catch (error) {

            expect(error).toBeDefined()
            expect(error instanceof Error).toBeTruthy()
            expect(error.message).toBe(`${emptyObject} is an empty object`)
        }
    })

    it('should throw an error using an array', () => {
        let arr = []
        try {
            artistComment.find(arr)
                .then(comments => {})
        } catch (error) {

            expect(error).toBeDefined()
            expect(error instanceof Error).toBeTruthy()
            expect(error.message).toBe(`${arr} is an empty object`)
        }
    })
})

describe('remove all', () => {
    const comment = {
        id: uuid(),
        artistId: `artistId-${Math.random()}`,
        userId: `userId-${Math.random()}`,
        text: `comment ${Math.random()}`,
        date: new Date
    }

    const comment2 = {
        id: uuid(),
        artistId: `artistId-${Math.random()}`,
        userId: `userId-${Math.random()}`,
        text: `comment ${Math.random()}`,
        date: new Date
    }

    const comment3 = {
        id: uuid(),
        artistId: `artistId-${Math.random()}`,
        userId: `userId-${Math.random()}`,
        text: `comment ${Math.random()}`,
        date: new Date
    }

    beforeEach(() =>
        fsp.writeFile(file, JSON.stringify([comment, comment2, comment3]))
    )

    it('should succeed on removing all comments', () => {
        artistComment.removeAll()
            .then(() => fsp.readFile(file))
            .then(content => {
                let contentFromFile = JSON.parse(content)
                expect(contentFromFile).toBeDefined()
                expect(contentFromFile instanceof Array).toBeTruthy()
                expect(contentFromFile.length).toBe(0)
            })
    })
   
})

after(() => fsp.writeFile(file, JSON.stringify([])))
})


//     describe('delete', () => {
//         const comment = {
//             artistId: `artistId-${Math.random()}`,
//             userId: `userId-${Math.random()}`,
//             text: `comment ${Math.random()}`,
//             date: new Date
//         }

//         beforeEach(() =>
//             artistComment.add(comment)
//         )

//         it('should succeed on correct comment id', () => {
//             return artistComment.delete(comment.id)
//                 .then(() => artistComment.retrieve(comment.id))
//                 .then(comment => expect(comment).toBeNull())
//         })
//     })

//     describe('find', () => {
//         const comment = {
//             artistId: `artistId-${Math.random()}`,
//             userId: `userId-${Math.random()}`,
//             text: `comment ${Math.random()}`,
//             date: new Date
//         }

//         const comment2 = {
//             artistId: `artistId-${Math.random()}`,
//             userId: `userId-${Math.random()}`,
//             text: `comment ${Math.random()}`,
//             date: new Date
//         }

//         const comment3 = {
//             artistId: `artistId-${Math.random()}`,
//             userId: `userId-${Math.random()}`,
//             text: `comment ${Math.random()}`,
//             date: new Date
//         }

//         const comment4 = {
//             artistId: comment2.artistId,
//             userId: `userId-${Math.random()}`,
//             text: `comment ${Math.random()}`,
//             date: new Date
//         }

//         beforeEach(() =>
//             artistComment.add(comment)
//                 .then(() => artistComment.add(comment2))
//                 .then(() => artistComment.add(comment3))
//                 .then(() => artistComment.add(comment4))
//         )

//         it('should succeed on correct criteria by id', () =>
//             artistComment.find({ id: comment2.id })
//                 .then(comments => {
//                     expect(comments).toBeDefined()
//                     expect(comments.length).toBe(1)

//                     const [{ id, artistId, userId, text, date }] = comments

//                     expect(id).toBe(comment2.id)
//                     expect(artistId).toBe(comment2.artistId)
//                     expect(userId).toBe(comment2.userId)
//                     expect(text).toBe(comment2.text)
//                     expect(date.toString()).toBe(comment2.date.toString())
//                 })
//         )

//         it('should succeed on correct criteria by artist id', () =>
//             artistComment.find({ artistId: comment2.artistId })
//                 .then(comments => {
//                     expect(comments).toBeDefined()
//                     expect(comments.length).toBe(2)

//                     const [_comment, _comment2] = comments

//                     expect(_comment.id).toBe(comment2.id)
//                     expect(_comment.artistId).toBe(comment2.artistId)
//                     expect(_comment.userId).toBe(comment2.userId)
//                     expect(_comment.text).toBe(comment2.text)
//                     expect(_comment.date.toString()).toBe(comment2.date.toString())

//                     expect(_comment2.id).toBe(comment4.id)
//                     expect(_comment2.artistId).toBe(comment4.artistId)
//                     expect(_comment2.userId).toBe(comment4.userId)
//                     expect(_comment2.text).toBe(comment4.text)
//                     expect(_comment2.date.toString()).toBe(comment4.date.toString())
//                 })
//         )
//     })
})