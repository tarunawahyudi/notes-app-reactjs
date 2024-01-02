import useInput from "../hooks/useInput.js";
import {Link, Navigate, useNavigate} from "react-router-dom";
import {register} from "../utils/network-data.js";
import {useContext} from "react";
import AuthContext from "../context/AuthContext.js";

function RegisterPage() {
    const [name, handlerChangeName] = useInput('');
    const [email, handlerChangeEmail] = useInput('');
    const [password, handlerChangePassword] = useInput('');
    const [confirmPassword, handlerChangeConfirmPassword] = useInput('');

    const {authedUser} = useContext(AuthContext);
    const redirect = useNavigate();

    const onSubmitHandler = async () => {
        if ((!name) || (!email) || (!password) || (!confirmPassword)) {
            return alert('Mohon lengkapi form nya');
        }
        if (password !== confirmPassword) {
            return alert('Password dan Confirm password tidak cocok bre 😒')
        }
        const {error} = await register({name, email, password});
        if (!error) {
            alert('Registrasi Berhasil! 🎉');
            redirect('/login');
        }
    }

    if (authedUser) {
        return <Navigate to="/login" />
    }

    return (
        <section className="regsiter-page">
            <h2>Isi form untuk mendaftar akun.</h2>
            <div className="input-register">
                <label htmlFor="name">Name</label>
                <input onChange={handlerChangeName} type="text" id="name" value={name} />
                <label htmlFor="email">Email</label>
                <input onChange={handlerChangeEmail} type="email" id="email" value={email} />
                <label htmlFor="password">Password</label>
                <input onChange={handlerChangePassword} type="password" id="password" value={password} />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input onChange={handlerChangeConfirmPassword} type="password" id="confirmPassword" value={confirmPassword} />
                <button onClick={onSubmitHandler} type="button">Register</button>
            </div>
            <p>Sudah punya akun? <Link to="/login">Login di sini brader 🤓</Link></p>
        </section>
    );
}

export default RegisterPage;