import useInput from "../hooks/useInput.js";
import {login} from "../utils/network-data.js";
import {Link} from "react-router-dom";

function LoginPage({ loginSuccess }) {
    const [email, handleEmailChange] = useInput('');
    const [password, handlePasswordChange] = useInput('');

    const onLogin = async () => {
        const {error, data} = await login({email, password});
        if (!error) {
            await loginSuccess(data);
        }
    }

    return (
        <section className="login-page"><h2>Silahkan login disini 👌</h2>
            <div className="input-login">
                <label htmlFor="email">Email</label>
                <input onChange={handleEmailChange} type="email" id="email" value={email}/>
                <label htmlFor="password">Password</label>
                <input onChange={handlePasswordChange} type="password" id="password" value={password}/>
                <button onClick={onLogin} type="button">Login</button>
            </div>
            <p>Belum punya akun? <Link to="/register">Daftar disini bray 😎</Link></p>
        </section>
    );
}

export default LoginPage;