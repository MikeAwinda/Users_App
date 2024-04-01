import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function UserEditModal({ user, isOpen, onRequestClose, onSave }) {
    const [editedName, setEditedName] = useState(user.name);
    const [editedUsername, setEditedUsername] = useState(user.username);
    const [editedEmail, setEditedEmail] = useState(user.email);
    const [editedPhone, setEditedPhone] = useState(user.phone);
    const [editedCompany, setEditedCompany] = useState(user.company);
    const [editedStreet, setEditedStreet] = useState(user.street);

    const handleSave = () => {
        onSave({
            id: user.id,
            name: editedName,
            email: editedEmail,
        });
        onRequestClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Edit User"
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
                content: {
                    width: '400px',
                    margin: 'auto',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    fontFamily: 'Raleway',
                },
            }}
        >
            <h1 style={{ marginBottom: '20px' }}>Edit User</h1>
            <input
                type="text"
                placeholder="Name"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.3s',
                    outline: 'none',
                    borderColor: '#0074D9',
                    marginBottom: '20px',
                    fontFamily: 'Raleway',
                }}
            />
            <input
                type="text"
                placeholder="Username"
                value={editedUsername}
                onChange={(e) => setEditedUsername(e.target.value)}
                style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.3s',
                    outline: 'none',
                    borderColor: '#0074D9',
                    marginBottom: '20px',
                    fontFamily: 'Raleway',
                }}
            />
            <input
                type="email"
                placeholder="Email"
                value={editedEmail}
                onChange={(e) => setEditedEmail(e.target.value)}
                style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.3s',
                    outline: 'none',
                    borderColor: '#0074D9',
                    marginBottom: '20px',
                    fontFamily: 'Raleway',
                }}
            />
            <input
                type="tel"
                placeholder="Phone"
                value={editedPhone}
                onChange={(e) => setEditedPhone(e.target.value)}
                style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.3s',
                    outline: 'none',
                    borderColor: '#0074D9',
                    marginBottom: '20px',
                    fontFamily: 'Raleway',
                }}
            />
            <input
                type="text"
                placeholder="Company Name"
                value={editedCompany.name} // Access the 'name' property
                onChange={(e) => setEditedCompany({ ...editedCompany, name: e.target.value })}
                style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.3s',
                    outline: 'none',
                    borderColor: '#0074D9',
                    marginBottom: '20px',
                    fontFamily: 'Raleway',
                }}
            />
            <input
                type="text"
                placeholder="Street"
                value={editedStreet}
                onChange={(e) => setEditedStreet(e.target.value)}
                style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.3s',
                    outline: 'none',
                    borderColor: '#0074D9',
                    marginBottom: '20px',
                    fontFamily: 'Raleway',
                }}
            />

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                    onClick={handleSave}
                    style={{
                        marginLeft: '10px',
                        backgroundColor: '#04AA6D',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s',
                        fontFamily: 'Raleway',
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
                        fontFamily: 'Raleway',
                    }}
                >
                    Cancel
                </button>
            </div>
        </Modal>
    );
}

export default UserEditModal;