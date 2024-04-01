import React, { useState } from 'react';

function UserEditForm({ user, onUpdate, onRequestClose }) {
    const [error, setError] = useState(null);

    const handleUpdateUser = async () => {
        try {
            const updatedUser = {
                id: user.id,
                name: editedName,
                username: editedUsernam,
                email: editedEmail,
                phone: editedPhone,
                company: editedCompany,
                street: editedStreet,
            };
            await axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, updatedUser);
            onUpdate(updatedUser);
        } catch (error) {
            console.error('Error updating user:', error);
            setError("Failed to update user. Please try again later.");
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                    onClick={handleUpdateUser}
                    style={{
                        marginLeft: '10px',
                        backgroundColor: '#04AA6D',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s',
                    }}
                >
                    Save
                </button>
                <button
                    onClick={onRequestClose}
                    style={{
                        marginLeft: '10px',
                        backgroundColor: '#ccc',
                        color: 'black',
                        border: 'none',
                        padding: '10px 20px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s',
                    }}
                >
                    Cancel
                </button>
            </div>
            {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        </div>
    );
}

export default UserEditForm;