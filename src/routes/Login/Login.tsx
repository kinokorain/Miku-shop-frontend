import { useState } from 'react'
// import { redirect } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    document.querySelector(".registerbtn")?.addEventListener("click", (e) => {
        e.preventDefault();
    })

    function LoginUser() {
        async function sendLoginInfo() {
            const response = await fetch("http://localhost:3030/login", {
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
            if (body.success === true) {
                console.log("redirecting");
                navigate("/hub");
            }
        }

        sendLoginInfo();
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
