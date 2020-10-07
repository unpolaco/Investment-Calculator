import React from 'react';

export const LogInForm = () => {
    return (
        <div>
            <form>
                <label htmlFor="userName">Enter your username</label>
                <input type="text" name="userName" />
                <label htmlFor="password">Enter your password</label>
                <input type="password" name="password" />
                <button>Log In</button>
            </form>
            <div>
                Don't have an account?
                <p>Sign up</p>
            </div>
        </div>
    );
};
