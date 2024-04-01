import React, { useState } from 'react';
import './styles/UserForm.css';

function UserForm() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [street, setStreet] = useState('');

    const handleAddUser = async () => {
        try {
            const newUser = {
                name,
                username,
                email,
                phone,
                company: {
                    name: companyName,
                },
                address: {
                    street,
                },
            };

            const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            if (!response.ok) {
                console.log('User added:', newUser);
            } else {
                console.error('Error adding user:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleAddUser();
    };

    return (
        <div className="user-form-container">
            <div className="user-input">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="user-input">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="user-input">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="user-input">
                <input
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <div className="user-input">
                <input
                    type="text"
                    placeholder="Company"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                />
            </div>
            <div className="user-input">
                <input
                    type="text"
                    placeholder="Street"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                />
            </div>
            <button className="add-user-button" type="submit" onClick={handleSubmit}>
                Add
            </button>
        </div>
    );
}

export default UserForm;