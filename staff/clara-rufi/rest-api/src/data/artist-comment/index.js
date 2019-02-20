const uuid = require("uuid/v4");
const fs = require("fs");
const path = require("path");

const artistComment = {
    add(comment) {
        const id = uuid();
        comment.id = id;

        const file = path.join(__dirname, "artist-comments.json");

        return new Promise((resolve, reject) =>

            fs.readFile(file, "utf8", (err, data) => {

                if (err) {
                    reject(err);

                } else {
                    obj = JSON.parse(data);
                    obj.push(comment);
                    const json = JSON.stringify(obj);
                    fs.writeFile(file, json, err => {
                        if (err) {
                            reject(err);
                        }
                    });
                }
                resolve(comment.id);
            })
        );
    },

    retrieve(id) {
        const file = path.join(__dirname, "artist-comments.json");
        return new Promise((resolve, reject) =>
            fs.readFile(file, "utf8",(err, data) => {              
                if (err) {
                    reject(err)                    
                } else {

                    obj = JSON.parse(data);
                    obj.find(com => com.id === id)
                }
                resolve(com)
            })
        )
    },

    update(newCom) {
        const file = path.join(__dirname, "artist-comments.json");
        debugger
        return new Promise((resolve, reject) =>
            fs.readFile(file, "utf8", (err, data) => {
                debugger
                if (err) {
                    reject(err)
                } else {
                    debugger
                    comments = JSON.parse(data)
                    index=comments.findIndex(com=>com.id===newCom.id)
                    comments.splice(index,1,newCom)
                    debugger
                    return fs.writeFile(file, comments)
                }
                resolve (comments)
            })
        )
        }
    }

   
module.exports = artistComment;

            


