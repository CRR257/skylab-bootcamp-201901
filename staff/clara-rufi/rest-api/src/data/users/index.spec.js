// ./bin/mongod --dbpath ./db   => en consola GIT engegar base de dades mongo
// .\bin\mongod --dbpath .\db => en consola cmder (dins de la carpeta mongo)
// dins de la consola:
// show collections, db.users.find(), db.users.insertOne({name:"clara")}, 
// db.users.findOne({_id: ObjectId("5c6fda57950c9a48725f3303")})
// db.users.insertOne({age:"33", name:"nico"})   db.users.find({age:"33"})
// db.users.findOne({_id: ObjectId("5c6fda57950c9a48725f3303")})
// exercutar aquest test: mocha .\src\data\users\
'use strict'

require('dotenv').config()

const { MongoClient, ObjectId } = require('mongodb')
const users = require('.')
const { expect } = require('chai')

const {DB_URL} = process.env

describe('user', () => {
    let client

    before(() =>
        MongoClient.connect(DB_URL, { useNewUrlParser: true })
            .then(_client => {
                client = _client
                users.collection = client.db().collection('users')
            })
    )

    beforeEach(() => users.collection.deleteMany())

    describe('add', () => {
        const _user = {
            name: 'Tachi',
            surname: 'Melodin',
            email: 'tachito',
            password: 'meguhtalagasssolina'
        }

        it('should succeed on correct data', () =>
            users.add(_user)
                .then(id => {
                    expect(id).to.exist
                    expect(id).to.be.a('string')

                    return users.collection.findOne({ _id: ObjectId(id) })
                })
                .then(({ name, surname, email, password }) => {
                    expect(name).to.equal(_user.name)
                    expect(surname).to.equal(_user.surname)
                    expect(email).to.equal(_user.email)
                    expect(password).to.equal(_user.password)
                })
        )

    })

    describe('find by email', () => {
//per cada test, tornem a registrar usuari

            const _user = {
                name: 'Tachi',
                surname: 'Melodin',
                email: 'tachito',
                password: 'meguhtalagasssolina'
            }
           
    beforeEach( () => users.collection.insertOne(_user)) 
// no podem utilitzar el mètode add

it('should succeed on correct data', () =>
users.findByEmail(_user.email)
    .then(({ id, _id, name, surname, email, password }) => {
        expect(id).to.exist
        expect(id).to.be.a('string')
        expect(_id).not.to.exist
        expect(name).to.equal(_user.name)
        expect(surname).to.equal(_user.surname)
        expect(email).to.equal(_user.email)
        expect(password).to.equal(_user.password)
    })
)

    it('should resolve null on non matching email', () =>
    users.findByEmail('unknown@mail.com')
        .then(user => expect(user).to.be.null)
    )
})

describe('find by id', () => {
    const _user = {
        name: 'Tachi',
        surname: 'Melodin',
        email: 'tachito@mail.com',
        password: 'meguhtalagasssolina'
    }

    let userId

    beforeEach(() =>
        users.collection.insertOne(_user)
            .then(res => userId = res.insertedId.toString())
    )

    it('should succeed on correct data', () =>
    users.findById(userId)
        .then(({ id, _id, name, surname, email, password }) => {
            expect(id).to.equal(userId)
            expect(_id).not.to.exist
            expect(name).to.equal(_user.name)
            expect(surname).to.equal(_user.surname)
            expect(email).to.equal(_user.email)
            expect(password).to.equal(_user.password)
        })
)

    it('should resolve null on non matching id', () =>
    users.findByEmail('unknown-id')
        .then(user => expect(user).to.be.null)
    )
})

describe('udpate', () => {
    const _user = {
        name: 'Tachi',
        surname: 'Melodin',
        email: 'tachito@mail.com',
        password: 'meguhtalagasssolina'
    }

    beforeEach(() =>
        users.collection.insertOne(_user)
            .then(res => _user.id = res.insertedId.toString())
    )

    it('should succeed on correct data', () => {
        _user.someExtraData = ['hello', 'world']

        return users.update(_user)
            .then(() =>
                users.collection.findOne({ _id: ObjectId(_user.id) })
                    .then(({ _id, id, name, surname, email, password, someExtraData }) => {
                        expect(_id).to.exist
                        expect(id).not.to.exist
                        expect(name).to.equal(_user.name)
                        expect(surname).to.equal(_user.surname)
                        expect(email).to.equal(_user.email)
                        expect(password).to.equal(_user.password)
                        expect(someExtraData).to.deep.equal(_user.someExtraData)
                    })
            )
    })

    it('should resolve null on non matching id', () =>
        users.findByEmail('unknown-id')
            .then(user => expect(user).to.be.null)
    )
})

    after(() =>
        users.collection.deleteMany()
            .then(() => client.close())
    )
})