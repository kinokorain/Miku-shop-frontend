import React, { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    document.querySelector(".registerbtn")?.addEventListener("click", (e) => {
        e.preventDefault();
    })
    function LoginUser() {
        async function sendRegInfo() {
            const response = await fetch("http://localhost:33033/login", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
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
            <form action="">
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
                    <button onClick={LoginUser} type="submit" className="registerbtn">Login</button>
                </div>
            </form>
        </section>
    )
}
