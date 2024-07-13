import { Link } from "react-router-dom";
import { useState } from 'react';

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    document.querySelector(".registerbtn")?.addEventListener("click", (e) => {
        e.preventDefault();
    })

    function RegUser() {
        async function sendRegInfo() {
            const response = await fetch("http://localhost:3030/register", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    "email": email,
                    "password": password
                })
            })
            const body = await response.json();
            console.log(body);
        }
        sendRegInfo();
    }
    return (
        <section className='reg-page'>
            <h1>
                <span className='accent-color'>Miku</span> Notes
            </h1>
            <p >Your notes and to-do lists, always at hand.<br></br>
                Simple, fast, <span className='accent-color'>clean.</span></p>
            <form action="" method='post'>
                <div className="reg-form-container">
                    <div>
                        <i className="fa-solid fa-user"></i>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" name='email' id="email" required />
                    </div>
                    <div>
                        <i className="fa-solid fa-lock"></i>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" name="psw" id="psw" required />
                        <a className='forgot-password-link'>Forgot password?</a>
                    </div>
                    <div>
                        <i className="fa-solid fa-lock"></i>
                        <input onChange={(e) => setRepeatPassword(e.target.value)} type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
                    </div>
                    {password === repeatPassword ? <button onClick={RegUser} type="submit" className="registerbtn">
                        Sign up
                    </button> : <button disabled type="submit" className="registerbtn">
                        Sign up
                    </button>}

                    <Link to="/login" className='log-in-link'>Or <span className='accent-color'>log in</span>, if you have an account</Link>
                </div>
            </form>
        </section>
    )
}
