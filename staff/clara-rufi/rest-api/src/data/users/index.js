'use strict'

//const { MongoClient, ObjectId } = require('mongodb')
const { ObjectId } = require('mongodb')

const user = {
    collection: null,

    __normalize__(user) {
        user.id = user._id.toString()

        delete user._id

        return user
    },

    add(user) {
        // TODO validate user and its fields (type and content)

        return this.collection.insertOne(user)
            .then(res => res.insertedId.toString())
    },

    findByEmail(email){

        if(typeof email !== 'string') throw TypeError ('email is not an string')
        if(!email.trim().length) throw Error('email is empty') 
        
        return this.collection.findOne({ email })
        .then(user => {
            if (!user) return null

            return this.__normalize__(user)
        })

    },

    findById(id){

        if(typeof id !== 'string') throw TypeError ('id is not an string')
        if(!id.trim().length) throw Error('id is empty') 
        
        return this.collection.findOne({_id: ObjectId(id)})
        .then(user => {
            if (!user) return null

            return this.__normalize__(user)
        })
    },

        update(user){
            if (typeof id !== 'string') throw TypeError(`${id} is not a string`)
            if (!id.trim().length) throw Error('id is empty')

            if (data.constructor !== Object) throw TypeError(`${data} is not an object`)

            const { id, ..._user } = user

        return this.collection.findOneAndUpdate({ _id: ObjectId(id) }, { $set: _user })
            .then(() => { })
    }
}


module.exports = user