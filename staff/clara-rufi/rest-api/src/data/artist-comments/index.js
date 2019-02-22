const uuid = require("uuid/v4");
const fs = require('fs')// WARN need node v10+
const fsp = fs.promises // WARN need node v10+
const path = require("path");

const artistComment = {

    file: 'artist-comments.json',

    __load__(file) {   // es com el readFile. file es la ruta de l'arxiu

        if (typeof file !== 'string') throw TypeError(`${file} is not a string`)
        if (file.trim().length === 0) throw Error(`${file} is empty`)

     // return fsp.readFile(file)
        //     .then(content => JSON.parse(content))
        return new Promise((resolve, reject) => {
            fs.readFile(file, (error, content) => {
                if (error) return reject(error)

                resolve(JSON.parse(content))
            })
        })
    },


    __save__(file, comments) {
        if (typeof file !== 'string') throw TypeError(`${file} is not a string`)
        if (file.trim().length === 0) throw Error(`${file} is empty`)

        if (!(comments instanceof Array)) throw TypeError(`${comments} is not an array`)
       // return fsp.writeFile(file, JSON.stringify(comments, null, 4))
       return new Promise((resolve, reject) => {
        fs.writeFile(file, JSON.stringify(comments, null, 4), error => {
            if (error) return reject(error)

            resolve()
        })
    })
},

    add(comment) {

        if (!(comment instanceof Object)) throw TypeError(`${comment} is not an object`)

        const file = path.join(__dirname, this.file);

        return this.__load__(file)
            .then(comments => {
                comment.id = uuid()

                comments.push(comment)

                return this.__save__(file, comments)
            })
    },

    retrieve(id) {
        if (typeof id !== 'string') throw TypeError(`${id} is not a string`)
        if (id.trim().length === 0) throw Error(`${id} is empty`)

        const file = path.join(__dirname, this.file)

        return this.__load__(file)
            .then(comments => {
                const comment = comments.find(comment => comment.id === id)

                if (typeof comment === 'undefined') return null

                comment.date = new Date(comment.date)

                return comment
            })
    },

    update(comment) {
        if (!(comment instanceof Object)) throw TypeError(`${comment} is not an object`)

        const file = path.join(__dirname, this.file)

        return this.__load__(file)
            .then(comments => {
                const index = comments.findIndex(_comment => _comment.id === comment.id)

                if (index < 0) throw Error(`comment with id ${comment.id} not found`)

                comments[index] = comment

                return this.__save__(file, comments)
            })
    },

    remove(id) {
        if (typeof id !== 'string') throw TypeError(`${id} is not a string`)
        if (id.trim().length === 0) throw Error(`${id} is empty`)

        const file = path.join(__dirname, this.file)

        return this.__load__(file)
            .then(comments => {
                const index = comments.findIndex(comment => comment.id === id)

                if (index < 0) throw Error(`comment with id ${id} not found`)

                comments.splice(index, 1)

                return this.__save__(file, comments)
            })
    },

    removeAll() {
        const file = path.join(__dirname, this.file)

        return this.__save__(file, [])
    },

    find(criteria) {
        if (!(criteria instanceof Object)) throw TypeError(`${criteria} is not an object`)
        if (Object.keys(criteria).length === 0) throw Error(`${criteria} is an empty object`)

        const file = path.join(__dirname, this.file)

        return this.__load__(file)
            .then(comments => {
                const filtered = comments.filter(comment => {
                    for (const key in criteria)
                        if (comment[key] !== criteria[key]) return false

                    return true
                })

                filtered.forEach(comment => comment.date = new Date(comment.date))

                return filtered
            })
    }
}

module.exports = artistComment






// return new Promise((resolve, reject) =>

// fs.readFile(file, "utf8", (err, data) => {

//     if (err) {
//         reject(err);

//     } else {
//         obj = JSON.parse(data);
//         obj.push(comment);
//         const json = JSON.stringify(obj);
//         fs.writeFile(file, json, err => {
//             if (err) {
//                 reject(err);
//             }
//         });
//     }
//     resolve(comment.id);
// })
// );
// },

// retrieve(id) {
// const file = path.join(__dirname, "artist-comments.json");
// return new Promise((resolve, reject) =>
// fs.readFile(file, "utf8",(err, data) => {              
//     if (err) {
//         reject(err)                    
//     } else {

//         obj = JSON.parse(data);
//         obj.find(com => com.id === id)
//     }
//     resolve(com)
// })
// )
// },

// update(newCom) {
// const file = path.join(__dirname, "artist-comments.json");
// debugger
// return new Promise((resolve, reject) =>
// fs.readFile(file, "utf8", (err, data) => {
//     debugger
//     if (err) {
//         reject(err)
//     } else {
//         debugger
//         comments = JSON.parse(data)
//         index=comments.findIndex(com=>com.id===newCom.id)
//         comments.splice(index,1,newCom)
//         debugger
//         return fs.writeFile(file, comments)
//     }
//     resolve (comments)
// })
// )
// }
// }
