import React from 'react'

export default function Register() {
    return (
        <section className='reg-page'>
            <h1>
                <span className='accent-color'>Miku</span> Notes
            </h1>
            <form action="">
                <div className="reg-form-container">
                    <input type="email" placeholder="Email" name='email' id="email" required />

                    <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

                    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
                    <button type="submit" className="registerbtn">Sign up <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </form>
        </section>
    )
}
