import React, { useState } from 'react';
import { Button, Form, Input, Card } from 'antd';
import './styles/profile.css';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
  });
  const [editing, setEditing] = useState(false);

  const handleUpdate = (values) => {
    console.log('Updated Values:', values);
    setUserData(values);
    setEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="profile-container">
      <Card className="profile-card">
        <h1 className="profile-title">My Profile</h1>
        {!editing ? (
          <div className="profile-view">
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <Button type="primary" onClick={() => setEditing(true)}>
              Edit Profile
            </Button>
          </div>
        ) : (
          <Form
            name="profile"
            layout="vertical"
            initialValues={userData}
            onFinish={handleUpdate}
          >
            <Form.Item
              name="name"
              label="Full Name"
              rules={[{ required: true, message: 'Please enter your full name' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email Address"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' },
              ]}
            >
              <Input />
            </Form.Item>

            <Button type="primary" htmlType="submit" style={{ marginRight: '8px' }}>
              Save
            </Button>
            <Button onClick={() => setEditing(false)}>Cancel</Button>
          </Form>
        )}
      </Card>
    </div>
  );
};

export default Profile;
