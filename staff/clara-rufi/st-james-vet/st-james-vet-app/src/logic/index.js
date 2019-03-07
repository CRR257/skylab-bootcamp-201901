'use strict'


/**
 * Abstraction of business logic.
 */
const logic = {
    url: 'http://localhost:8000/api',
    __userId__: null,
    __userApiToken__: null,
    __updateToken__(){
        this.__userApiToken__ = sessionStorage.getItem('__userToken__')
    },

    /**
    * Registers a user.
    * 
    * @param {string} name 
    * @param {string} surname
    * @param {string} surname
    * @param {string} idCard
    * @param {string} phone
    * @param {string} adress
    * @param {string} city 
    * @param {string} email 
    * @param {string} password 
    * @param {string} passwordConfirmation 
    */
    registerUser(name, surname, idCard, phone, adress, city, email, password, passwordConfirmation) {
        if (typeof name !== 'string') throw TypeError(name + ' is not a string')

        if (!name.trim().length) throw Error('name cannot be empty')

        if (typeof surname !== 'string') throw TypeError(surname + ' is not a string')

        if (!surname.trim().length) throw Error('surname cannot be empty')

        if (typeof idCard !== 'string') throw TypeError(idCard + ' is not a string')

        if (!idCard.trim().length) throw Error('idCard cannot be empty')

        if(typeof phone !== 'string') throw TypeError (phone + ' is not a string')

        if (!phone.trim().length) throw Error ('phone cannot be empty')

        if(typeof adress !== 'string') throw TypeError (adress + 'is not a string')

        if (!adress.trim().length) throw Error ('adress cannot be empty')

        if(typeof city !== 'string') throw TypeError (city + 'is not a string')

        if (!city.trim().length) throw Error ('city cannot be empty')

        if (typeof email !== 'string') throw TypeError(email + ' is not a string')

        if (!email.trim().length) throw Error('email cannot be empty')

        if (typeof password !== 'string') throw TypeError(password + ' is not a string')

        if (!password.trim().length) throw Error('password cannot be empty')

        if (typeof passwordConfirmation !== 'string') throw TypeError(passwordConfirmation + ' is not a string')

        if (!passwordConfirmation.trim().length) throw Error('password confirmation cannot be empty')

        if (password !== passwordConfirmation) throw Error('passwords do not match')

        console.log(name, surname, idCard, phone, adress, city, email, password, passwordConfirmation)

        return fetch(`${this.url}/user`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            
            body: JSON.stringify({ name, surname, idCard, phone, adress, city, email, password, passwordConfirmation })
        })
            .then(response => response.json())
            .then(({ id, error }) => {
                if (error) throw Error(error)

                return id
            })
    },

    /**
    * Registers a owner's pet.
    * 
    * @param {string} owner 
    * @param {string} name 
    * @param {string} specie
    * @param {string} breed
    * @param {string} color
    * @param {string} gender
    * @param {string} birthdate
    * @param {string} microchip
    * @param {string} petlicence
    * @param {string} neutered
    * @param {string} vaccionations
    * @param {string} controls
    * @param {string} details
    */
    registerPet(owner, name, specie, breed, color, gender, birthdate, microchip, petlicence, neutered,vaccionations, controls, details) {
        
        if (typeof owner !== 'string') throw TypeError(owner + ' is not a string')

        if (!owner.trim().length) throw Error('owner cannot be empty')

        if (typeof name !== 'string') throw TypeError(name + ' is not a string')

        if (!name.trim().length) throw Error('name cannot be empty')

        if (typeof specie !== 'string') throw TypeError(specie + ' is not a string')

        if (!specie.trim().length) throw Error('specie cannot be empty')

        if (typeof breed !== 'string') throw TypeError(breed + ' is not a string')

        if (!breed.trim().length) throw Error('breed cannot be empty')

        if (typeof color !== 'string') throw TypeError(color + ' is not a string')

        if (!color.trim().length) throw Error('color cannot be empty')

        if (typeof gender !== 'string') throw TypeError(gender + ' is not a string')

        if (!gender.trim().length) throw Error('gender cannot be empty')

        if(typeof birthdate != 'string') throw TypeError (birthdate + 'is not a string')

        if (!birthdate.trim().length) throw Error ('birthdate cannot be empty')

        if(typeof microchip != 'string') throw TypeError (microchip + 'is not a string')

        if (!microchip.trim().length) throw Error ('microchip cannot be empty')

        if(typeof petlicence != 'string') throw TypeError (petlicence + 'is not a string')

        if (!microchip.trim().length) throw Error ('microchip cannot be empty')

        if(typeof vaccionations != 'string') throw TypeError (vaccionations + 'is not a string')

        if (!vaccionations.trim().length) throw Error ('vaccionations cannot be empty')

        if(typeof neutered != 'string') throw TypeError (neutered + 'is not a string')

        if (!neutered.trim().length) throw Error ('neutered cannot be empty')

        if(typeof controls != 'string') throw TypeError (controls + 'is not a string')

        if (!controls.trim().length) throw Error ('controls cannot be empty')


        if(typeof details != 'string') throw TypeError (details + 'is not a string')

        if (!details.trim().length) throw Error ('details cannot be empty')


        console.log(owner, name, specie, breed, color, gender, birthdate, microchip, petlicence, neutered, vaccionations, controls, details)
       debugger
        return fetch(`${this.url}/pet`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({owner, name, specie, breed, color, gender, birthdate, microchip, petlicence, neutered, vaccionations, controls, details})
        })
            .then(response => response.json())
            .then(({ id, error }) => {
                if (error) throw Error(error)
        
                return id
            })
    },
   

    /**
     * Logs in the user by its credentials.
     * 
     * @param {string} email 
     * @param {string} password 
     */
    logInUser(email, password) {
        if (typeof email !== 'string') throw TypeError(email + ' is not a string')

        if (!email.trim().length) throw Error('email cannot be empty')

        if (typeof password !== 'string') throw TypeError(password + ' is not a string')

        if (!password.trim().length) throw Error('password cannot be empty')


        return fetch(`${this.url}/user/auth`, {
           
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) throw Error(response.error)

                return response.token
            })
    },

    /**
     * Checks user is logged in.
     */
    get isUserLoggedIn() {
        return !!this.__userId__
    },

    /**
     * Logs out the user.
     */
    logOutUser() {
        this.__userId__ = null
        this.__userApiToken__ = null
    },

    retrieveUsers() {
        // if (typeof token !== 'string') throw TypeError(`${token} is not a string`)
        // if (!token.trim().length) throw Error('token is empty')
        this.__updateToken__()
        return fetch(`${this.url}/users`, {

            headers: {
                authorization: `Bearer ${this.__userApiToken__}`
            }
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) throw Error(response.error)

                return response
            })
    },

    retrievePets(userId){

        this.__updateToken__()
        return fetch(`${this.url}/pets/${userId}`, {
        
            headers:{
                authorization: `Bearer ${this.__userApiToken__}`
            }
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) throw Error(response.error)

                return response
            })
    },

    retrieveUser(userId) {
        // if (typeof token !== 'string') throw TypeError(`${token} is not a string`)
        // if (!token.trim().length) throw Error('token is empty')
        this.__updateToken__()
        return fetch(`${this.url}/user/${userId}`, {

            headers: {
                authorization: `Bearer ${this.__userApiToken__}`
            }
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) throw Error(response.error)

                return response
            })
        },
        
    retrievePet(petsId) {
        // if (typeof token !== 'string') throw TypeError(`${token} is not a string`)
        // if (!token.trim().length) throw Error('token is empty')
       
        // this.__updateToken__()
        // return fetch(`${this.url}/user`, {

         this.__updateToken__()
        return fetch(`${this.url}/pet/${petsId}`, {
            headers: {
                authorization: `Bearer ${this.__userApiToken__}`
            }
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) throw Error(response.error)

                return response
            })
    },

    updateUser(name, surname, idCard, phone, adress, city, email) {
        // if (typeof token !== 'string') throw TypeError(`${token} is not a string`)
        // if (!token.trim().length) throw Error('token is empty')

        // if (data.constructor !== Object) throw TypeError(`${data} is not an object`)
        debugger
        return fetch(`${this.url}/user`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${this.__userApiToken__}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({name, surname, idCard, phone, adress, city, email})
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) throw Error(response.error)

                return response
            })
    },

    /**
    * Updates a pet.
    * 
    * @param {string} token
    * @param {string} data
    * 
    */
    updatePet(petsId, name, microchip, petlicence, neutered) {
        // if (typeof token !== 'string') throw TypeError(`${token} is not a string`)
        // if (!token.trim().length) throw Error('token is empty')

        // if (data.constructor !== Object) throw TypeError(`${data} is not an object`)
        debugger
        return fetch(`${this.url}/pet`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${this.__userApiToken__}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({petsId, name, microchip, petlicence, neutered})
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) throw Error(response.error)

                return response
            })
    },

    /**
    * Removes an user.
    * 
    * @param {string} token 
    * @param {string} email
    * @param {string} password
    * 
    */
    removeUser(token, email, password) {
        if (typeof token !== 'string') throw TypeError(`${token} is not a string`)
        if (!token.trim().length) throw Error('token is empty')

        if (typeof email !== 'string') throw TypeError(`${email} is not a string`)
        if (!email.trim().length) throw Error('email is empty')

        if (typeof password !== 'string') throw TypeError(`${password} is not a string`)
        if (!password.trim().length) throw Error('password is empty')

        return fetch(`${this.url}/user`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) throw Error(response.error)

                return response
            })
    },

}

export default logic