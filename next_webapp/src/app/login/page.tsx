import React, { useState } from 'react';
import '../../../public/styles/login.css'; // Adjust the path as necessary

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [error, setError] = useState('');

    // Handles changes in the email and password fields
    const handleChange = (event) => {
        const { name, value } = event.target;
        name === 'email' ? setEmail(value) : setPassword(value);
    };

    // Toggles the visibility of the password
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // Handles form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email || !password) {
            setError('Please fill in both fields');
            return;
        }
        // Placeholder for authentication logic
        console.log('Authentication in progress...');
        setError('');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit} className="login-form">
                <div className="input-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleChange}
                        required
                    />
                    <label>Email</label>
                </div>
                <div className="input-group">
                    <input
                        type={passwordVisible ? 'text' : 'password'}
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleChange}
                        required
                    />
                    <label>Password</label>
                    <span onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                        {passwordVisible ? 'Hide' : 'Show'}
                    </span>
                </div>
                <button type="submit" className="login-button">Login</button>
                {error && <div className="error text-red-500">{error}</div>}
            </form>
        </div>
    );
}

export default LoginForm;
