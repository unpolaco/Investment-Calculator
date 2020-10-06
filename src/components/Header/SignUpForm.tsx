import React from 'react';

export const SignUpForm = () => {
    return (
        <div>
            <form>
                <label htmlFor="userName">Enter your username</label>
                <input type="text" name="userName" />
                <label htmlFor="email">Enter your email</label>
                <input type="text" name="email" />
                <label htmlFor="setPassword">Create your password</label>
                <input type="password" name="setPassword" />
                <label htmlFor="verifyPassword">Repeat your password</label>
                <input type="password" name="verifyPassword" />
                <button>Sign Up</button>
            </form>
            <div>
                Already have an account?
                <p>Log In</p>
            </div>
        </div>
    );
};
