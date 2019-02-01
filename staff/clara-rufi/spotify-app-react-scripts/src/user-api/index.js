// 'use strict' //

const userApi = {
    register(username, usersurname, email, password, confirmpassword) {
        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (!username.trim().length) throw Error('username is empty')

        if (typeof usersurname !== 'string') throw TypeError(`${usersurname} is not a string`)
        if (!usersurname.trim().length) throw Error('usersurname is empty')

        if (typeof email !== 'string') throw TypeError(`${email} is not a string`)
        if (!email.trim().length) throw Error('email is empty')

        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)
        if (!password.trim().length) throw Error('password is empty')

        if (typeof confirmpassword !== 'string') throw TypeError(`${confirmpassword} is not a string`)
        if (!confirmpassword.trim().length) throw Error('confirmpassword is empty')

        return fetch('https://skylabcoders.herokuapp.com/api/user', { 
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ username, usersurname, email, password, confirmpassword })
        })
            .then(response => response.json())
            .then(response => {
                const { status } = response
                
                if (status === 'OK') return response.data.id
                else throw Error(response.error)
            })
    },

    auth(username, password) {

        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (!username.trim().length) throw Error('username is empty')

        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)
        if (!password.trim().length) throw Error('password is empty')


        return fetch('https://skylabcoders.herokuapp.com/api/auth', { 
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
            .then(response => response.json())
            .then(response => {
                const { status, data } = response
                
                if (status === 'OK') return data
                else throw Error(response.error)
            })
    },

    update(id, token, updateInfo) {

        if (typeof id !== 'string') throw TypeError(`${id} is not a string`)
        if (!id.trim().length) throw Error('username is empty')

        if (typeof token !== 'string') throw TypeError(`${token} is not a string`)
        if (!token.trim().length) throw Error('password is empty')
        
        return fetch(`https://skylabcoders.herokuapp.com/api/user/${id}`, { 
            method: 'PUT', 
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ updateInfo })
        })
            .then(response => response.json())
            .then(response => {
                const { status, data } = response
                
                if (status === 'OK') return data.id
                else throw Error(response.error)
            })
    },

    delete(username, password, id, token) {

        if (typeof username !== 'string') throw TypeError(`${username} is not a string`)
        if (!username.trim().length) throw Error('username is empty')

        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)
        if (!password.trim().length) throw Error('password is empty')
        
        if (typeof id !== 'string') throw TypeError(`${id} is not a string`)
        if (!id.trim().length) throw Error('username is empty')

        if (typeof token !== 'string') throw TypeError(`${token} is not a string`)
        if (!token.trim().length) throw Error('password is empty')
        
        return fetch(`https://skylabcoders.herokuapp.com/api/user/${id}`, { 
            method: 'DEL', 
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${token}`
            },
           
        })
            .then(response => response.json())
            .then(response => {
                const { status, data } = response
                
                if (status === 'OK') return data.id
                else throw Error(response.error)
            })
        }

}


export default userApi