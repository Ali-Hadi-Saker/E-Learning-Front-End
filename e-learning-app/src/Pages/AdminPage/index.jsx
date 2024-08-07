import React from 'react';
import './style.css';

const AdminPage = () => {
    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>

            <div className="section">
                <h2>All Classes</h2>
                <div className="class-list">
                    {/* Replace with actual class components */}
                    <div className="class-card">Class 1</div>
                    <div className="class-card">Class 2</div>
                    <div className="class-card">Class 3</div>
                </div>
            </div>

            <div className="section form-container felx column center">
                <h2>Create New Class</h2>
                <input
                    type="text"
                    placeholder="Title"
                    value={''}
                    onChange={''}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={''}
                    onChange={''}
                />
                <input
                    type="text"
                    placeholder="Instructor"
                    value={''}
                    onChange={''}
                />
                <button onClick={''}>Create Class</button>
            </div>
        </div>
    );
};

export default AdminPage;
