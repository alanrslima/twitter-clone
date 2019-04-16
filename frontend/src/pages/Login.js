import React, { Component } from 'react';
import './Login.css';
import twitterLogo from '../twitter.svg';

export default class Login extends Component {

    state = {
        username: ''
    };

    _handleInputChange = e => {
        this.setState({ username: e.target.value });
    };

    _handleSubmit = e => {
        e.preventDefault();
        const { username } = this.state;
        if (!username.length) return;
        localStorage.setItem('@GoTwitter:username', username);
        this.props.history.push('/timeline');
    };

    render(){
        return (
            <div className="login-wrapper">
                <img src={twitterLogo} alt="GoTwitter"/>
                <form onSubmit={this._handleSubmit}>
                    <input  
                        value={this.state.username}
                        onChange={this._handleInputChange}
                        placeholder="Nome de usuário" 
                    />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        );
    }
}