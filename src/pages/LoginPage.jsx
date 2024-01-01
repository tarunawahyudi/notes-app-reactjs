import useInput from "../hooks/useInput.js";
import {useContext, useEffect} from "react";
import {getAccessToken, login, putAccessToken} from "../utils/network-data.js";
import {Link} from "react-router-dom";
import AuthContext from "../context/AuthContext.js";
import Homepage from "./Homepage.jsx";

function LoginPage() {
    const [email, handleEmailChange] = useInput('');
    const [password, handlePasswordChange] = useInput('');
    const {auth, authentication} = useContext(AuthContext);

    const onSubmitHandler = async () => {
        const {error, data} = await login({email, password});
        const { accessToken } = data;
        if (!error) {
            authentication();
            putAccessToken(accessToken);
            console.log(getAccessToken());
        }
    }

    if (auth) {
        return <Homepage />
    }

    return (
        <section className="login-page"><h2>Silahkan login disini 👌</h2>
            <div className="input-login">
                <label htmlFor="email">Email</label>
                <input onChange={handleEmailChange} type="email" id="email" value={email}/>
                <label htmlFor="password">Password</label>
                <input onChange={handlePasswordChange} type="password" id="password" value={password}/>
                <button onClick={onSubmitHandler} type="button">Login</button>
            </div>
            <p>Belum punya akun? <Link to="/register">Daftar disini bray 😎</Link></p>
        </section>
    );
}

export default LoginPage;