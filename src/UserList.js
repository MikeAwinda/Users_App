import React, { useState, useEffect } from 'react';
import UserForm from './UserForm';
import UserEditModal from './UserEditModal';
import LoadingSpinner from './LoadingSpinner';
import './styles/UserList.css';
import './styles/DeleteButton.css';
import './styles/EditButton.css';

function UserList({ onDelete }) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleEditUser = (userId) => {
        const userToEdit = users.find((user) => user.id === userId);
        setSelectedUser(userToEdit);
        setModalIsOpen(true);
        console.log(`Edit user with ID: ${userId}`);
    };

    const handleSaveUser = () => {
        setModalIsOpen(false);
    };

    const handleDeleteUser = async (userId) => {
        try {
            await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
                method: 'DELETE',
            });

            const updatedUsers = users.filter((user) => user.id !== userId);
            setUsers(updatedUsers);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const result = await response.json();
                setUsers(result);
            } catch (error) {
                console.log('Error fetching users:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();

        const intervalId = setInterval(fetchUsers, 60000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="userlist-container">
            <h1>Users</h1>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <ul>
                    {users.map((user) => (
                        <li key={user.id} className="user-item">
                            <span className="username">{user.name}</span>
                            <div className="user-details">
                                <p>Username: {user.username}</p>
                                <p>Email: {user.email}</p>
                                <p>Phone: {user.phone}</p>
                                <p>Company: {user.company.name}</p>
                                <p>Street: {user.address.street}</p>
                            </div>
                            <div className="buttons">
                                <button className="edit-button" onClick={() => handleEditUser(user.id)}>
                                    Edit
                                </button>
                                <button className="delete-button" onClick={() => handleDeleteUser(user.id)}>
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            <h1>New User</h1>
            <UserForm />

            {selectedUser && (
                <UserEditModal
                    user={selectedUser}
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    onSave={handleSaveUser}
                />
            )}
        </div>
    );
}

export default UserList;