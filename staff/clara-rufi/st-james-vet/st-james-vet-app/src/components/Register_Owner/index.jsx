import React, { Component } from 'react'

import logic from '../../logic';



class Register_Owner extends Component {

    state = { name: '', surname: '', idCard: '', phone: '', adress: '', city: '', email: '', password: '', passwordConfirmation: '', error: null, isRegister: false, isLogin: true }

    handleOnChange = ({ target: { name, value } }) => this.setState({ [name]: value })


    handleRegisterSubmit = event => {
        event.preventDefault()
        const { state: { name, surname, idCard, phone, adress, city, email, password, passwordConfirmation } } = this
        this.register(name, surname, idCard, phone, adress, city, email, password, passwordConfirmation)

    }

    handleGoLogin = event => {
        event.preventDefault()
        this.props.history.push('/login')
    }

    handleGoHome = event => {
        event.preventDefault()
        this.props.history.push('/home')
    }

    register = async (name, surname, idCard, phone, adress, city, email, password, passwordConfirmation) => {
        try {
            debugger
            await logic.registerUser(name, surname, idCard, phone, adress, city, email, password, passwordConfirmation)
            console.log('you have succesfully registered!!')
            this.setState({ isLogin: false, isRegister: true, error: null })
        } catch ({ message }) {
            this.setState({ error: message })
        }
    }

    render() {

        return <form onSubmit={this.handleRegisterSubmit} >
            <section class="form">
                <p className="title__form">Owner's details:</p>
                <div className="input__form">
                    <label>Name</label>
                    <input type="text" name="name" onChange={this.handleOnChange} required></input>
                </div>
                <div className="input__form">
                    <label>Surname</label>
                    <input type="text" name="surname" onChange={this.handleOnChange} required></input>
                </div>
                <div className="input__form">
                    <label>Id Card</label>
                    <input type="text" name="idCard" onChange={this.handleOnChange} required></input>
                </div>
                <div className="input__form">
                    <label>Phone</label>
                    <input type="text" name="phone" onChange={this.handleOnChange} required></input>
                </div>
                <div className="input__form">
                    <label>Adress</label>
                    <input type="text" name="adress" onChange={this.handleOnChange} required></input>
                </div>
                <div className="input__form">
                    <label>City</label>
                    <input type="text" name="city" onChange={this.handleOnChange} required></input>
                </div>
                <div className="input__form">
                    <label>Email</label>
                    <input type="text" name="email" onChange={this.handleOnChange} required></input>
                </div>
                <div className="input__form">
                    <label>Password</label>
                    <input type="password" name="password" onChange={this.handleOnChange} required></input>
                </div>
                <div className="input__form">
                    <label>Confirm Password</label>
                    <input type="password" name="passwordConfirmation" onChange={this.handleOnChange} required></input>
                </div>
                {this.state.isLogin && <button type="submit" className="button">Sign in</button>}
                <button className="button__gohome" onClick={this.handleGoHome}>Go Home</button>
                {this.state.isRegister && <button className="button" onClick={this.handleGoLogin}>Go Login</button>}
                {this.state.error && <p className="feedback feedback__error">{this.state.error}</p>}
                {this.state.isRegister && <p className="feedback feedback__success">You have successfully registered {this.state.name}</p>}
            </section>
        </form>
    }
}

export default Register_Owner