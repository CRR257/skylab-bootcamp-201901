import React, { Component } from 'react';
import './login.sass'


class Login extends Component{
    state = {email: '', password: '', }

    handleEmailInput = event => this.setState({email:event.target.value})

    handlePasswordInput = event => this.setState({password: event.target.value})

    onLogin = event => {
        event.preventDefault()

        const {state: {email, password}, props: {onLogin} } = this
        onLogin(email, password)
    }


    render(){
       
        const { onLogin, handleEmailInput, handlePasswordInput } = this 

        return <section className="cart_login">
            <h3>Login:</h3>
            <form>
                <input className="email" placeholder="@mail" onChange= {handleEmailInput}></input> 
                <input className="password" placeholder="password" onChange= {handlePasswordInput}></input>
                <button onClick={onLogin} type="submit" className="buttonLogin">Login</button>
                <button onClick={this.onRegister} className= "buttonRegister">Register</button>
            </form>
        </section>
    }
}

export default Login