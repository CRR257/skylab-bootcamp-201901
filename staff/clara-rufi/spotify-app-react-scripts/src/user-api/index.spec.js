// 'use strict'

import userApi from '.'

describe('user api', () => {
    const username = `clara123-${Math.random()}`
    const usersurname = `r`
    const email = `clara@gmail.com-${Math.random()}`
    const password = `123`
    const confirmpassword = `123`
    const id
    const token
    const updateInfo = {age: 33}

    describe('register', () => {
        it('should succeed on correct data', () =>
            userApi.register(username, usersurname, email, password, confirmpassword)
                .then(id => expect(id).toBeDefined())
                .catch(error => expect(error).toBeUndefined())
        )

        it('should fail on already existing user', () =>
            userApi.register(username, usersurname, email, password, confirmpassword)
                .then(() => {
                    throw Error('should not have passed by here')
                })
                .catch(error => {
                    expect(error).toBeDefined()
                    expect(error.message).toBe(`user with username \"${username}\" already exists`)
                })
        )
        it('password must be defined', () =>
        userApi.register(username)
            .then(() => {
                throw Error('should not have passed by here')
            })
            .catch(error => {
                expect(error).toBeDefined()
                expect(error.message).toBe(`password is null or not defined`)
            })
        )
    })
    describe('auth', () => {
        id = `5c54031e17332400091f06c0`
        token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNTQwMzFlMTczMzI0MDAwOTFmMDZjMCIsImlhdCI6MTU0OTAxMDUyOSwiZXhwIjoxNTQ5MDE0MTI5fQ.4wlMe2YGdSTaS_Cuq1ohNpNpgqxgt5HUmYcLVxPT_d0`
        it('auth should succeed on correct data', () =>
            userApi.auth(username, password)
                .then(data => {
                    expect(data.id).toBeDefined()
                    expect(data.token).toBeDefined()
                    id=data.id
                    token=data.token
                })
                
                .then(data => expect(data.id).toBeDefined())
                .then(data => expect(data.token).toBeDefined())
                .catch(error => expect(error).toBeUndefined()) 
        )
        it('should fail on an incorrect data', () => {
            try{
                userApi.auth()
            }
            catch(err){
                expect(err).toBeDefined()
                expect(err.message).toBe("undefined is not a string")
            }
        })
    })

    describe('update', () => {
        it ('should update information', () => 
            userApi.update(username, password, id, token, updateInfo)
            .then(data => expect(data.id).toBeDefined())
            .then(data => expect(data.token).toBeDefined())
            .catch(error => expect(error).toBeDefined()) //
        )
        it('should fail on an incorrect data', () => {
            try{
                userApi.update()
            }
            catch(err){
                expect(err).toBeDefined()
                expect(err.message).toBe("undefined is not a string")
            }
        })
    })

    describe('delete', () => {
        it ('should delete user', () => 
            userApi.delete(username, password, id, token)
            .then(data => expect(data.id).toBeDefined())
            .then(data => expect(data.token).toBeDefined())
            .catch(error => expect(error).toBeDefined()) //
        )
        it('should fail on an incorrect data', () => {
            try{
                userApi.delete()
            }
            catch(err){
                expect(err).toBeDefined()
                expect(err.message).toBe("undefined is not a string")
            }
        })
    })
})