import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import PulseLoader from "react-spinners/PulseLoader";
import { auth} from './firebase'

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const signIn = e => {
        setLoading(true)
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
                // console.log(auth)
            })
            .catch(error => alert(error.message))
            .then(setLoading(false))
    }

    // const register = e => {
    //     e.preventDefault();

    //     auth
    //         .createUserWithEmailAndPassword(email, password)
    //         .then((auth) => {
    //             // it successfully created a new user with email and password
    //             console.log(auth)
    //             if (auth) {
    //                 // history.push('/')
    //             }
    //         })
    //         .catch(error => alert(error.message))
    // }
    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt="..."
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form onSubmit={signIn}>
                    <h5>E-mail</h5>
                    <input type='text' required value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' required value={password} onChange={e => setPassword(e.target.value)} />

                    {/* <button type='submit' onClick={signIn}  className='login__signInButton'>Sign In</button> */}
                    <button className="login__signInButton" type="submit">
                        {loading ? (
                            <PulseLoader size={8} color={"black"} loading={loading} />
                        ) : (
                            "Sign In"
                        )}
                    </button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                {/* <button onClick={register} className='login__registerButton'>Create your Amazon Account</button> */}
                <div className="login__newUser">
                    <p><b style={{fontSize:"16px"}}>Don't you have an account?</b></p>
                    <Link to="register">
                        <button className="login__registerButton">
                            Create your Amazon Account
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Login;