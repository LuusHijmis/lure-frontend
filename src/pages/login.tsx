import React from 'react';
import '../styles.css';
import LoginService from "../services/LoginService";
import {User} from "../user";

function Login() {

    const [loginForm, setLoginForm] = React.useState(
        {
            emailadres: '',
            password: '',
        }
    );
    console.log(loginForm.emailadres);

    function handleSubmit(event: any) {
        event.preventDefault();
        const user = {
            emailadres: loginForm.emailadres,
            password:  loginForm.password,
        } as User

        LoginService.loginUser(user);
        console.log('welkom bij lure', loginForm.emailadres);
    }

    function handleOnChange(event: any) {
        const {name, value} = event.target
        console.log(value);
        console.log(name);
        setLoginForm(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    return (
        <div className='inlogscherm'>
            <title>LOGIN</title>
                <h1 className="welcome_line_1">Welcome to lure!</h1>
                <h2 className="welcome_line_2">The best place to be seduced with adds from your favourite local entrepreneurs</h2>
            < div className='box_login_screen'>
                <form
                    className='loginForm'
                    onSubmit={handleSubmit}>
                    <label className='login_label_e-mail'>E-mailadres</label>
                    <input
                        className='input_emailadres'
                        type = 'email'
                        name = 'emailadres'
                        placeholder='e-mailadres'
                        onChange={handleOnChange}
                        defaultValue={loginForm.emailadres}
                    />
                    <label className='login_label_password'>Wachtwoord</label>
                    <input
                        className='input_wachtwoord'
                        type = 'password'
                        name = 'password'
                        placeholder = 'wachtwoord'
                        onChange={handleOnChange}
                        defaultValue={loginForm.password}
                    />
                    <button className="Login-button" >Login</button>
                </form>
            </div>
        </div>
    )
}
export default Login;